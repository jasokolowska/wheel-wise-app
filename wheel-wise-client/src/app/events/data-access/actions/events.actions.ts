import { createAction, props } from '@ngrx/store';
import {CyclingEvent} from "../../event.model";


export const loadEvents = createAction('[Events] Load Events');
export const loadEventsSuccess = createAction('[Events] Load Events Success', props<{ events: CyclingEvent[] }>());
export const loadEventsFailure = createAction('[Events] Load Events Failure', props<{ error: any }>());

export const loadEventById = createAction(
  '[Events] Load Event by Id', props<{ eventId: string }>());
export const loadEventByIdSuccess = createAction(
  '[Events] Load Event by Id Success', props<{ event: CyclingEvent }>());
export const loadEventByIdFailure = createAction(
  '[Events] Load Event by Id Failure', props<{ error: any }>());
