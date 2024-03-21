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
export class EventFormComponent implements OnInit{
  eventForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) { }

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
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
      this.store.dispatch(createEvent(this.eventForm.value));
    }
  }
}
