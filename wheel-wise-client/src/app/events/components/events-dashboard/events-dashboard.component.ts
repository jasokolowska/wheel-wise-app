import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {EventItemComponent} from "./event-item/event-item.component";
import {CyclingEvent} from "../../event.model";
import {on, Store} from "@ngrx/store";
import {eventsFeature} from "../../data-access/reducers/events.reducer";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {loadEvents} from "../../data-access/actions/events.actions";
import {DialogService, DynamicDialogModule, DynamicDialogRef} from "primeng/dynamicdialog";
import {EventSigninDialogComponent} from "./event-signin-dialog/event-signin-dialog.component";



@Component({
  selector: 'app-events-dashboard',
  standalone: true,
  imports: [CardModule, ButtonModule, EventItemComponent, NgIf, AsyncPipe],
  providers: [DialogService],
  templateUrl: './events-dashboard.component.html',
  styleUrl: './events-dashboard.component.scss'
})
export class EventsDashboardComponent implements OnInit{
  events$ = this.store.select(eventsFeature.selectEvents);
  ref: DynamicDialogRef | undefined;

  constructor(private store: Store, private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadEvents());
  }

  onEventSignUp(eventId: string) {
    this.ref = this.dialogService.open(EventSigninDialogComponent, {
      header: `Sign Up for an Event: ${eventId}`,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    // this.ref.onClose.subscribe((product: Product) => {
    //   if (product) {
    //     this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
    //   }
    // });
  }

  protected readonly on = on;
}
