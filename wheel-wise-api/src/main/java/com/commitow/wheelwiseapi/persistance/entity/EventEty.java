package com.commitow.wheelwiseapi.persistance.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "Events")
@NoArgsConstructor
@Getter
@Setter
public class EventEty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long eventId;

    @Column(name = "event_type")
    private String eventType;

    @Column(name = "distance")
    private BigDecimal distance;

    @Column(name = "difficulty_level")
    private String difficultyLevel;

    @Column(name = "start_datetime")
    private LocalDateTime startDateTime;

    @Column(name = "end_datetime")
    private LocalDateTime endDateTime;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @ManyToOne
    @JoinColumn(name = "organizer_id", referencedColumnName = "user_id")
    private UserEty organizer;

    @ManyToOne
    @JoinColumn(name = "route_id", referencedColumnName = "route_id")
    private RouteEty route;
}