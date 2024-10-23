import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ElementRef, Input, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'microfrontend',
  standalone: true,
  template: '<div #mfe></div>',
})
export class MicrofrontendComponent {
  @ViewChild('mfe')
  mfe!: ElementRef<HTMLDivElement>;

  @Input({ required: true })
  remoteName!: string;

  @Input({ required: true })
  exposedModule!: string;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      loadRemoteModule(this.remoteName, this.exposedModule).then(
        ({ mount }) => {
          mount(this.mfe.nativeElement);
        }
      );
    });
  }
}
