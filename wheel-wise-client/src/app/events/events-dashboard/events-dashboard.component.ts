import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-events-dashboard',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './events-dashboard.component.html',
  styleUrl: './events-dashboard.component.scss'
})
export class EventsDashboardComponent {

}
