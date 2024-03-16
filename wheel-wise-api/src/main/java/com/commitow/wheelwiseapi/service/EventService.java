package com.commitow.wheelwiseapi.service;

import com.commitow.wheelwiseapi.openapi.model.EventDto;
import com.commitow.wheelwiseapi.openapi.model.RegistrationRequestDto;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {


    public void createNewEvent(EventDto eventDto) {
    }

    public List<EventDto> getAllEvents() {
        ArrayList<EventDto> events = new ArrayList<>();
        events.add(getEventDto());
        events.add(getEventDto());
        events.add(getEventDto());
        return events;
    }

    public EventDto getEvent(Integer eventId) {
        return getEventDto();
    }

    public void registerForEvent(Integer eventId, RegistrationRequestDto registrationRequestDto) {
    }

    private static EventDto getEventDto() {
        EventDto eventDto = new EventDto();
        eventDto.setEventId(1);
        eventDto.eventType("Training");
        eventDto.setDescription("Short and intensive road training around Wrocław");
        eventDto.setDifficultyLevel("medium");
        eventDto.setRouteId(1);
        eventDto.setStartDatetime(LocalDateTime.now());
        eventDto.setEndDatetime(LocalDateTime.now());
        return eventDto;
    }
}
