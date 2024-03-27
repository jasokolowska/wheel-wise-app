import {createAction, props} from "@ngrx/store";
import {CyclingEvent} from "../../event.model";

export const createEvent = createAction(
  '[Events] Create Event',
  props<{ event: CyclingEvent }>()
);

export const createEventSuccess = createAction(
  '[Events] Create Event Success',
  props<{ event: CyclingEvent }>()
);

export const createEventFailure = createAction(
  '[Events] Create Event Failure',
  props<{ error: any }>()
);

export const clearLastEvent = createAction('[Events] Clear last saved event');
