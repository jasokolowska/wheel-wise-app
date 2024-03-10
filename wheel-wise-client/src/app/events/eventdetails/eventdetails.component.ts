import { Component } from '@angular/core';
import {GoogleMap} from "@angular/google-maps";
import {MapComponent} from "./map/map.component";

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
export class EventdetailsComponent {
  eventdetails: any ={

  };
}
