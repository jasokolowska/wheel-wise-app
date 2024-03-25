// events.reducer.ts

import {createFeature, createReducer, on} from '@ngrx/store';
import {CyclingEvent} from '../../event.model';
import * as EventsActions from '../actions/events.actions';

export interface EventsState {
  events: CyclingEvent[];
  eventsLoading: boolean;
  eventsLoadingError: any;
  event: CyclingEvent | undefined;
  eventLoading: boolean;
  eventLoadingError: any;
}

export const initialState: EventsState = {
  events: [],
  eventsLoading: false,
  eventsLoadingError: null,
  event: undefined,
  eventLoading: false,
  eventLoadingError: null
};

export const eventsFeature = createFeature({
  name: 'events',
  reducer: createReducer(
    initialState,
    on(EventsActions.loadEvents, state => ({
      ...state,
      eventsLoading: true,
      eventsLoadingError: null
    })),
    on(EventsActions.loadEventsSuccess, (state, {events}) => ({
      ...state,
      events,
      eventsLoading: false
    })),
    on(EventsActions.loadEventsFailure, (state, {error}) => ({
      ...state,
      eventsLoading: false,
      eventsLoadingError: error
    })),
    on(EventsActions.loadEventById, state => ({
      ...state,
      eventLoading: true,
      eventsLoadingError: null
    })),
    on(EventsActions.loadEventByIdSuccess, (state, {event}) => ({
      ...state,
      event,
      eventLoading: false
    })),
    on(EventsActions.loadEventByIdFailure, (state, {error}) => ({
      ...state,
      eventLoading: false,
      eventLoadingError: error
    }))
  ),

});

export const {
  name,
  reducer,
  selectEvents,
  selectEventsState,
  selectEventsLoading,
  selectEventsLoadingError
} = eventsFeature;
