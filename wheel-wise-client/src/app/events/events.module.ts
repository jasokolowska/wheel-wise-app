import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {eventsFeature} from "./data-access/reducers/events.reducer";
import {createEventFeature} from "./data-access/reducers/create-event.reducer";



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('events', eventsFeature.reducer),
    StoreModule.forFeature('create event', createEventFeature.reducer),
  ]
})
export class EventsModule { }
