import {Component, OnInit} from '@angular/core';
import {GoogleMap} from "@angular/google-maps";
import {MapComponent} from "./map/map.component";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {loadEventById} from "../../data-access/actions/events.actions";
import {eventsFeature} from "../../data-access/reducers/events.reducer";
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {TabViewModule} from "primeng/tabview";
import {ButtonModule} from "primeng/button";
import {EventSigninDialogComponent} from "../events-dashboard/event-signin-dialog/event-signin-dialog.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-eventdetails',
  standalone: true,
  imports: [
    GoogleMap,
    MapComponent,
    AsyncPipe,
    NgIf,
    DatePipe,
    TabViewModule,
    ButtonModule
  ],
  providers: [DialogService],
  templateUrl: './eventdetails.component.html',
  styleUrl: './eventdetails.component.scss'
})
export class EventdetailsComponent implements OnInit{

  eventdetails$ = this.store.select(eventsFeature.selectEvent);
  eventId: string | undefined;
  ref: DynamicDialogRef | undefined;

  constructor(private route: ActivatedRoute, private store: Store, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      if (this.eventId) {
        this.store.dispatch(loadEventById({eventId: this.eventId}))
      }
    });
  }

  onEventSignUp(eventId: string | undefined) {
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

}
