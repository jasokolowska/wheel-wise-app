import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {eventsReducer} from "./data-access/reducers/events.reducer";



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('events', eventsReducer),
  ]
})
export class EventsModule { }
