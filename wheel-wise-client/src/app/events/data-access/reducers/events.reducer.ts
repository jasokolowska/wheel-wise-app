// events.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { Event } from '../../event.model';
import * as EventsActions from '../actions/events.actions';

export interface EventsState {
  events: Event[];
  loading: boolean;
  error: any;
}

export const initialState: EventsState = {
  events: [],
  loading: false,
  error: null
};

export const eventsReducer = createReducer(
  initialState,
  on(EventsActions.loadEvents, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(EventsActions.loadEventsSuccess, (state, { events }) => ({
    ...state,
    events,
    loading: false
  })),
  on(EventsActions.loadEventsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
