package com.commitow.wheelwiseapi.service;

import com.commitow.wheelwiseapi.openapi.model.EventDto;
import com.commitow.wheelwiseapi.openapi.model.RegistrationRequestDto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {


    public EventDto createNewEvent(EventDto eventDto) {
        eventDto.setEventId(1);
        return  eventDto;
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
        eventDto.setTitle("Mountain Bike Challenge");
        eventDto.setSubtitle("Conquer the trails!");
        eventDto.setImg("/assets/coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg");
        eventDto.setDistance(BigDecimal.valueOf(19.85));
        eventDto.eventType("Training");
        eventDto.setDescription("Short and intensive road training around Wrocław");
        eventDto.setDifficultyLevel("Intermediate");
        eventDto.setRouteId(1);
        eventDto.setStartDatetime(LocalDateTime.now());
        eventDto.setEndDatetime(LocalDateTime.now());
        return eventDto;
    }
}
