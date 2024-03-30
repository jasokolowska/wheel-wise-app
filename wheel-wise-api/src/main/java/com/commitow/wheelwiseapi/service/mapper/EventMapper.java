package com.commitow.wheelwiseapi.service.mapper;

import com.commitow.wheelwiseapi.openapi.model.EventDto;
import com.commitow.wheelwiseapi.persistance.entity.EventEty;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface EventMapper {

    EventDto toDto(EventEty eventEty);

    EventEty toEty(EventDto eventDto);

    List<EventDto> toDtoList(List<EventEty> eventEtys);

    List<EventEty> toEtyList(List<EventDto> eventDtos);
}
