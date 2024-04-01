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
import {createEventFeature} from "./events/data-access/reducers/create-event.reducer";
import {provideImgixLoader} from "@angular/common";
import {eventsFeature} from "./events/data-access/reducers/events.reducer";
import {DynamicDialogModule} from "primeng/dynamicdialog";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAnimations(),
    provideStore(),
    provideState(eventsFeature),
    provideState(createEventFeature),
    provideEffects([EventsEffects, CreateEventEffects])]
};
