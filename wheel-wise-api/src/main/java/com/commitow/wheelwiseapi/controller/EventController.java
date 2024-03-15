package com.commitow.wheelwiseapi.controller;

import com.commitow.wheelwiseapi.openapi.api.EventsApi;
import com.commitow.wheelwiseapi.openapi.model.EventDto;
import com.commitow.wheelwiseapi.openapi.model.RegistrationRequestDto;
import com.commitow.wheelwiseapi.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value ="/api")
public class EventController implements EventsApi {

    private final EventService eventService;

    @Override
    public ResponseEntity<Void> createEvent(EventDto eventDto) {
        eventService.createNewEvent(eventDto);
        return ResponseEntity.accepted().build();
    }

    @Override
    public ResponseEntity<List<EventDto>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    @Override
    public ResponseEntity<EventDto> getEvent(Integer eventId) {
        return ResponseEntity.ok(eventService.getEvent(eventId));
    }

    @Override
    public ResponseEntity<Void> registerForEvent(Integer eventId, RegistrationRequestDto registrationRequestDto) {
        this.eventService.registerForEvent(eventId, registrationRequestDto);
        return ResponseEntity.accepted().build();
    }
}
