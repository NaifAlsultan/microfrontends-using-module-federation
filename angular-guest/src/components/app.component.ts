import { Component } from "@angular/core";

@Component({
  selector: "root",
  standalone: true,
  template: `<div style="border: 1px dashed red; margin: 16px; padding: 16px">
    <p>Angular Guest</p>
    <p>Value: {{ value }}</p>
    <button (click)="value = value + 1">Increment</button>
  </div> `,
})
export class AppComponent {
  value = 0;
}
