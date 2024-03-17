import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('events', eventReducer),
    E
  ]
})
export class EventsModule { }
