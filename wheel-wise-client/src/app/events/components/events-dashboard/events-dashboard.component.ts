import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {EventItemComponent} from "./event-item/event-item.component";



@Component({
  selector: 'app-events-dashboard',
  standalone: true,
  imports: [CardModule, ButtonModule, EventItemComponent],
  templateUrl: './events-dashboard.component.html',
  styleUrl: './events-dashboard.component.scss'
})
export class EventsDashboardComponent {
  events: Event[] = events;
}

interface Event {
  header: string;
  subheader: string;
  img: string;
  distance: string;
  level: string;
  type: 'competition' | 'training';
}

const events: Event[] = [
  {
    header: 'Mountain Bike Challenge',
    subheader: 'Conquer the trails!',
    img: "/assets/coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg",
    distance: '20 kilometers away',
    level: 'Intermediate',
    type: 'competition'
  },
  {
    header: 'Cycling Tour',
    subheader: 'Explore scenic routes!',
    img: '/assets/martin-magnemyr-nGt71kRwUOw-unsplash.jpg',
    distance: '10 kilometers away',
    level: 'Beginner',
    type: 'training'
  },
  {
    header: 'Road Race',
    subheader: 'Feel the adrenaline!',
    img: '/assets/lucas-canino-Lk4Bk3gPdoc-unsplash.jpg',
    distance: '30 kilometers away',
    level: 'Advanced',
    type: 'competition'
  }
];



