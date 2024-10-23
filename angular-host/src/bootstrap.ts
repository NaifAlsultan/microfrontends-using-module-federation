import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RootComponent } from "./components/root.component";
import { provideRouter, Routes } from "@angular/router";
import { OtherComponent } from "./components/other.component";
import { HomeComponent } from "./components/home.component";

const routes: Routes = [
  {
    path: "other",
    component: OtherComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
];

const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};

bootstrapApplication(RootComponent, appConfig).catch((err) =>
  console.error(err)
);
