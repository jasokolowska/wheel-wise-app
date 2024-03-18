import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideAnimations} from "@angular/platform-browser/animations";
import { provideStore } from '@ngrx/store';
import {EventsEffects} from "./events/data-access/effects/events.effects";
import {provideEffects} from "@ngrx/effects";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideStore(), provideEffects(EventsEffects)]
};
