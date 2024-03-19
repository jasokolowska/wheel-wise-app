// events.reducer.ts

import {createFeature, createReducer, on} from '@ngrx/store';
import {CyclingEvent} from '../../event.model';
import * as EventsActions from '../actions/events.actions';

export interface EventsState {
  events: CyclingEvent[];
  eventsLoading: boolean;
  eventsLoadingError: any;
}

export const initialState: EventsState = {
  events: [],
  eventsLoading: false,
  eventsLoadingError: null
};

export const eventsFeature = createFeature({
  name: 'events',
  reducer: createReducer(
    initialState,
    on(EventsActions.loadEvents, state => ({
      ...state,
      loading: true,
      error: null
    })),
    on(EventsActions.loadEventsSuccess, (state, {events}) => ({
      ...state,
      events,
      loading: false
    })),
    on(EventsActions.loadEventsFailure, (state, {error}) => ({
      ...state,
      loading: false,
      error
    })))
});

export const {
  name,
  reducer,
  selectEvents,
  selectEventsState,
  selectEventsLoading,
  selectEventsLoadingError
} = eventsFeature;
