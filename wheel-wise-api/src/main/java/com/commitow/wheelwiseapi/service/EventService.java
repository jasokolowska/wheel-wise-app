package com.commitow.wheelwiseapi.service;

import com.commitow.wheelwiseapi.openapi.model.EventDto;
import com.commitow.wheelwiseapi.openapi.model.RegistrationRequestDto;
import com.commitow.wheelwiseapi.persistance.entity.EventEty;
import com.commitow.wheelwiseapi.persistance.repository.EventRepository;
import com.commitow.wheelwiseapi.service.mapper.EventMapper;
import lombok.RequiredArgsConstructor;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepository eventRepository;
    private final EventMapper eventMapper;

    public EventDto createNewEvent(EventDto eventDto) {
        EventEty eventEty = eventMapper.toEty(eventDto);
        eventEty.setImg(getImageBasedOnEventType(eventDto.getEventType()));
        EventEty savedEventEty = eventRepository.save(eventEty);
        return eventMapper.toDto(savedEventEty);
    }

    private String getImageBasedOnEventType(String eventType) {
        return switch (eventType) {
            case "competition" -> "/assets/coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg";
            case "training" -> "/assets/lucas-canino--a8JBrew6iQ-unsplash.jpg";
            default -> "/assets/martin-magnemyr-nGt71kRwUOw-unsplash.jpg";
        };
    }

    public List<EventDto> getAllEvents() {
        List<EventEty> eventEties = eventRepository.findAll();
        return eventMapper.toDtoList(eventEties);
    }

    public EventDto getEvent(Long eventId) {
        Optional<EventEty> eventEty = eventRepository.findById(eventId);
        if (eventEty.isPresent()) {
            return eventMapper.toDto(eventEty.get());
        }else {
            throw new ObjectNotFoundException("Event", eventId);
        }
    }

    public void registerForEvent(Integer eventId, RegistrationRequestDto registrationRequestDto) {
    }

    private static EventDto getEventDto() {
        EventDto eventDto = new EventDto();
        eventDto.setEventId(1L);
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
