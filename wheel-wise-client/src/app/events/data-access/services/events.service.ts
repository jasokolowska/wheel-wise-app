// events.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../../event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsUrl = 'api/events'; // Assuming you have a mock API at this endpoint

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }
}
