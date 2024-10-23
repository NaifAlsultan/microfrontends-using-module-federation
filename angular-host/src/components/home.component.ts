import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MicrofrontendComponent } from "./microfrontend.component";

@Component({
  standalone: true,
  imports: [RouterLink, MicrofrontendComponent],
  template: `<div style="border: 1px dashed black; margin: 16px; padding: 16px">
    <p>Angular Host</p>
    <p>Value: {{ value }}</p>
    <button (click)="value = value + 1">Increment</button>
    <p><a routerLink="/other">Navigate Forward</a></p>
    <microfrontend remoteName="angular-guest" exposedModule="./mfe" />
  </div>`,
})
export class HomeComponent {
  value = 0;
}
