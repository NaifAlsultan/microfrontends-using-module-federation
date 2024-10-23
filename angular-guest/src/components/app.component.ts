import { Component, HostListener } from "@angular/core";

@Component({
  selector: "root",
  standalone: true,
  template: `<div style="border: 1px dashed red; margin: 16px; padding: 16px">
    <p>Angular Guest</p>
    <p>Value: {{ value }}</p>
    <button (click)="increment()">Increment</button>
  </div> `,
})
export class AppComponent {
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
