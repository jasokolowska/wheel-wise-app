// events.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CyclingEvent } from '../../event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsUrl = '/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<CyclingEvent[]> {
    return this.http.get<CyclingEvent[]>(this.eventsUrl);
  }

  getEvent(eventId: string): Observable<CyclingEvent> {
    return this.http.get<CyclingEvent>(this.eventsUrl + `/${eventId}`);
  }

  createEvent(event: CyclingEvent): Observable<CyclingEvent> {
    return this.http.post<CyclingEvent>(this.eventsUrl, event);
  }
}
