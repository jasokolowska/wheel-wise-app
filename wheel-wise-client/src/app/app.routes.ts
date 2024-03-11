import { Routes } from '@angular/router';
import {EventsDashboardComponent} from "./events/events-dashboard/events-dashboard.component";
import {EventdetailsComponent} from "./events/eventdetails/eventdetails.component";
import {EventFormComponent} from "./events/event-form/event-form.component";

export const routes: Routes = [
  { path: 'dashboard', component: EventsDashboardComponent },
  { path: 'event-details/:id', component: EventdetailsComponent },
  { path: 'new-event', component: EventFormComponent },
];
