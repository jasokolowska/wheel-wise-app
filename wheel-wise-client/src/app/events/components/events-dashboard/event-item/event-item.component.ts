import {Component, Input} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {SharedModule} from "primeng/api";
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    SharedModule,
    NgOptimizedImage,
    NgStyle,
    RouterLink
  ],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss'
})
export class EventItemComponent {
  @Input() header: string | undefined = '';
  @Input() subheader = '';
  @Input() img = '';
  @Input() distance = '';
  @Input() level = '';
  @Input() type: string | undefined = '';
  @Input() eventId: string | undefined = '';
}
