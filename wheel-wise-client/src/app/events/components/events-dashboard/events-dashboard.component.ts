import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {EventItemComponent} from "./event-item/event-item.component";
import {CyclingEvent} from "../../event.model";
import {Store} from "@ngrx/store";
import {eventsFeature} from "../../data-access/reducers/events.reducer";
import {AsyncPipe, NgIf} from "@angular/common";
import {loadEvents} from "../../data-access/actions/events.actions";



@Component({
  selector: 'app-events-dashboard',
  standalone: true,
  imports: [CardModule, ButtonModule, EventItemComponent, NgIf, AsyncPipe],
  templateUrl: './events-dashboard.component.html',
  styleUrl: './events-dashboard.component.scss'
})
export class EventsDashboardComponent implements OnInit{
  events$ = this.store.select(eventsFeature.selectEvents);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadEvents());
  }
}
