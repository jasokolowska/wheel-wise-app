package com.commitow.wheelwiseapi.controller;

import com.commitow.wheelwiseapi.openapi.api.EventsApi;
import com.commitow.wheelwiseapi.openapi.model.EventDtoDto;
import com.commitow.wheelwiseapi.openapi.model.RegistrationRequestDto;
import com.commitow.wheelwiseapi.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;

import java.util.List;

@AllArgsConstructor
public class EventController implements EventsApi {

    private final EventService eventService;

    @Override
    public ResponseEntity<Void> createEvent(EventDtoDto eventDtoDto) {
        eventService.createNewEvent(eventDtoDto);
        return ResponseEntity.accepted().build();
    }

    @Override
    public ResponseEntity<List<EventDtoDto>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    @Override
    public ResponseEntity<EventDtoDto> getEvent(Integer eventId) {
        return ResponseEntity.ok(eventService.getEvent(eventId));
    }

    @Override
    public ResponseEntity<Void> registerForEvent(Integer eventId, RegistrationRequestDto registrationRequestDto) {
        this.eventService.registerForEvent(eventId, registrationRequestDto);
        return ResponseEntity.accepted().build();
    }
}
