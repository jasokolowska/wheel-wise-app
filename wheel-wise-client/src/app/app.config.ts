import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideState, provideStore} from '@ngrx/store';
import {EventsEffects} from "./events/data-access/effects/events.effects";
import {provideEffects} from "@ngrx/effects";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {CreateEventEffects} from "./events/data-access/effects/create-event.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAnimations(),
    provideStore(),
    provideEffects([EventsEffects, CreateEventEffects])]
};
