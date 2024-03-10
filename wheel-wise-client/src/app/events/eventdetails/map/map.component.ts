import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GoogleMap, MapPolyline} from "@angular/google-maps";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    GoogleMap,
    MapPolyline
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  options: google.maps.MapOptions = {
    center: {lat: 52, lng: 19},
    zoom: 8
  };
}
