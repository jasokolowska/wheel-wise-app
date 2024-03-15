package com.commitow.wheelwiseapi.service;

import com.commitow.wheelwiseapi.openapi.model.EventDto;
import com.commitow.wheelwiseapi.openapi.model.RegistrationRequestDto;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventService {


    public void createNewEvent(EventDto eventDto) {
    }

    public List<EventDto> getAllEvents() {
        return null;
    }

    public EventDto getEvent(Integer eventId) {
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

    public void registerForEvent(Integer eventId, RegistrationRequestDto registrationRequestDto) {
    }
}
