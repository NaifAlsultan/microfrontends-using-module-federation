import {
  bootstrapApplication,
  createApplication,
} from "@angular/platform-browser";
import { AppComponent } from "./components/app.component";
import {
  createComponent,
  NgZone,
  ApplicationConfig,
  provideZoneChangeDetection,
} from "@angular/core";

export function mount(container: HTMLElement) {
  createApplication().then((appRef) => {
    const zone = appRef.injector.get(NgZone);
    zone.run(() => {
      const component = createComponent(AppComponent, {
        environmentInjector: appRef.injector,
        hostElement: container,
      });
      appRef.attachView(component.hostView);
    });
  });
}

if (document.querySelector("#dd41e3591918")) {
  const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true })],
  };

  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
}
