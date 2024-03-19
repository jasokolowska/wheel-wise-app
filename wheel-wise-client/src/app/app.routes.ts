import { Routes } from '@angular/router';
import {EventsDashboardComponent} from "./events/components/events-dashboard/events-dashboard.component";
import {EventdetailsComponent} from "./events/components/eventdetails/eventdetails.component";
import {EventFormComponent} from "./events/components/event-form/event-form.component";
import {eventsFeature} from "./events/data-access/reducers/events.reducer";
import {provideState} from "@ngrx/store";


export const routes: Routes = [
  { path: 'dashboard', component: EventsDashboardComponent,
    providers: [provideState(eventsFeature)]},
  { path: 'event-details/:id', component: EventdetailsComponent },
  { path: 'new-event', component: EventFormComponent },
];
