import { createReducer, on } from '@ngrx/store';
import * as CreateEventActions from '../actions/create-event.actions';

export interface CreateEventState {
  creating: boolean;
  error: any;
}

export const initialState: CreateEventState = {
  creating: false,
  error: null
};

export const createEventReducer = createReducer(
  initialState,
  on(CreateEventActions.createEvent, state => ({
    ...state,
    creating: true,
    error: null
  })),
  on(CreateEventActions.createEventSuccess, state => ({
    ...state,
    creating: false,
    error: null
  })),
  on(CreateEventActions.createEventFailure, (state, { error }) => ({
    ...state,
    creating: false,
    error: error
  }))
);
