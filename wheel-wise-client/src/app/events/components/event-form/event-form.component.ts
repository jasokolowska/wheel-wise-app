import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {MapComponent} from "../eventdetails/map/map.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {Store} from "@ngrx/store";
import {createEvent} from "../../data-access/actions/create-event.actions";
import {CyclingEvent} from "../../event.model";
import {createEventFeature} from "../../data-access/reducers/create-event.reducer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MapComponent,
    InputTextareaModule,
    DropdownModule,
    CalendarModule
  ],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent implements OnInit {
  eventForm!: FormGroup;
  createdEvent$ = this.store.select(createEventFeature.selectNewEvent);

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: [''],
      eventType: [''],
      distance: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      description: ['', Validators.required],
      startDatetime: ['', Validators.required],
      endDatetime: ['', Validators.required]
    });

    this.createdEvent$.pipe().subscribe(next => {
      if (next && next.eventId) {
        this.router.navigate([`/event-details/${next.eventId}`])
      }
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const newEvent: CyclingEvent = this.eventForm.value;
      this.store.dispatch(createEvent({event: newEvent}));
    }
  }
}
