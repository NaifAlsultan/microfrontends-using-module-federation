import { Component, HostListener } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MicrofrontendComponent } from "./microfrontend.component";

@Component({
  standalone: true,
  imports: [RouterLink, MicrofrontendComponent],
  template: `<div style="border: 1px dashed black; margin: 16px; padding: 16px">
    <p>Angular Host</p>
    <p>Value: {{ value }}</p>
    <button (click)="increment()">Increment</button>
    <p><a routerLink="/other">Navigate Forward</a></p>
    <microfrontend remoteName="angular-guest" exposedModule="./mfe" />
  </div>`,
})
export class HomeComponent {
  value = 0;
  increment() {
    const event = new CustomEvent("increment", { detail: ++this.value });
    window.dispatchEvent(event);
  }
  @HostListener("window:increment", ["$event.detail"])
  update(newValue: number) {
    this.value = newValue;
  }
}
