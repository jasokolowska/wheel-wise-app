import {createFeature, createReducer, on} from '@ngrx/store';
import * as CreateEventActions from '../actions/create-event.actions';
import {CyclingEvent} from "../../event.model";

export interface CreateEventState {
  newEvent: CyclingEvent | undefined;
  creating: boolean;
  error: any;
}

export const initialState: CreateEventState = {
  newEvent: undefined,
  creating: false,
  error: null
};

export const createEventFeature = createFeature({
  name: 'create event',
  reducer: createReducer(
    initialState,
    on(CreateEventActions.createEvent, state => ({
      ...state,
      creating: true,
      error: null
    })),
    on(CreateEventActions.createEventSuccess, (state, {event}) => ({
      ...state,
      newEvent: event,
      creating: false,
      error: null
    })),
    on(CreateEventActions.createEventFailure, (state, {error}) => ({
      ...state,
      creating: false,
      error: error
    }))
  )
});

export const {
  name,
  reducer,
  selectNewEvent,
  selectCreating,
  selectError
} = createEventFeature;
