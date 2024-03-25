import {Component, OnInit} from '@angular/core';
import {GoogleMap} from "@angular/google-maps";
import {MapComponent} from "./map/map.component";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {loadEventById} from "../../data-access/actions/events.actions";

@Component({
  selector: 'app-eventdetails',
  standalone: true,
  imports: [
    GoogleMap,
    MapComponent
  ],
  templateUrl: './eventdetails.component.html',
  styleUrl: './eventdetails.component.scss'
})
export class EventdetailsComponent implements OnInit{

  eventdetails: any ={

  };
  eventId: string | undefined;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      if (this.eventId) {
        this.store.dispatch(loadEventById({eventId: this.eventId}))
      }
    });
  }

}
