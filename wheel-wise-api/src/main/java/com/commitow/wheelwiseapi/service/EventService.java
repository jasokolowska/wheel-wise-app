package com.commitow.wheelwiseapi.service;

import com.commitow.wheelwiseapi.openapi.model.EventDtoDto;
import com.commitow.wheelwiseapi.openapi.model.RegistrationRequestDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {


    public void createNewEvent(EventDtoDto eventDtoDto) {
    }

    public List<EventDtoDto> getAllEvents() {
        return null;
    }

    public EventDtoDto getEvent(Integer eventId) {
        EventDtoDto eventDtoDto = new EventDtoDto();

        return null;
    }

    public void registerForEvent(Integer eventId, RegistrationRequestDto registrationRequestDto) {
    }
}
