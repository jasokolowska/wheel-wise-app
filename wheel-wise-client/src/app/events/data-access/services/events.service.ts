// events.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CyclingEvent } from '../../event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<CyclingEvent[]> {
    return this.http.get<CyclingEvent[]>(this.eventsUrl);
  }

  createEvent(event: CyclingEvent): Observable<CyclingEvent> {
    return this.http.post<CyclingEvent>(this.eventsUrl, event);
  }
}
