import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {eventsFeature} from "./data-access/reducers/events.reducer";
import {createEventReducer} from "./data-access/reducers/create-event.reducer";



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('events', eventsFeature.reducer),
    StoreModule.forFeature('createEvent', createEventReducer),
  ]
})
export class EventsModule { }
