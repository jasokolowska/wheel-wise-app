import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CreateEventActions from '../actions/create-event.actions';
import { EventsService } from '../services/events.service';

@Injectable()
export class CreateEventEffects {

  createEvent$ = createEffect(() => this.actions$.pipe(
      ofType(CreateEventActions.createEvent),
      switchMap(({ event }) => this.eventsService.createEvent(event)
        .pipe(
          map(createdEvent => CreateEventActions.createEventSuccess({ event: createdEvent })),
          catchError(error => of(CreateEventActions.createEventFailure({ error })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {}
}
