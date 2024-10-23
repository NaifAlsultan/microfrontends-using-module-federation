import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: '<a routerLink="/">Navigate Back</a>',
})
export class OtherComponent {}
