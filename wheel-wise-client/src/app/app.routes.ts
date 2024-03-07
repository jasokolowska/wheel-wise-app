import { Routes } from '@angular/router';
import {EventsDashboardComponent} from "./events/events-dashboard/events-dashboard.component";
import {EventdetailsComponent} from "./events/eventdetails/eventdetails.component";

export const routes: Routes = [
  { path: 'dashboard', component: EventsDashboardComponent },
  { path: 'event-details/:id', component: EventdetailsComponent },
];
