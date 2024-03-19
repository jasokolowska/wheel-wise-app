import { createAction, props } from '@ngrx/store';
import {CyclingEvent} from "../../event.model";


export const loadEvents = createAction('[Events] Load Events');
export const loadEventsSuccess = createAction('[Events] Load Events Success', props<{ events: CyclingEvent[] }>());
export const loadEventsFailure = createAction('[Events] Load Events Failure', props<{ error: any }>());
