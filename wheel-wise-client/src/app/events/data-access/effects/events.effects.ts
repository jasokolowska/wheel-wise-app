// events.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EventsService } from '../services/events.service';
import * as EventsActions from '../actions/events.actions';

@Injectable()
export class EventsEffects {

  loadEvents$ = createEffect(() => this.actions$.pipe(
    ofType(EventsActions.loadEvents),
    switchMap(() =>
      this.eventsService.getEvents().pipe(
        map(events => EventsActions.loadEventsSuccess({ events })),
        catchError(error => of(EventsActions.loadEventsFailure({ error })))
      )
    )
  ));

  loadEventsById$ = createEffect(() => this.actions$.pipe(
    ofType(EventsActions.loadEventById),
    switchMap(({eventId}) =>
      this.eventsService.getEvent(eventId).pipe(
        map(event => EventsActions.loadEventByIdSuccess({ event })),
        catchError(error => of(EventsActions.loadEventByIdFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {}
}
