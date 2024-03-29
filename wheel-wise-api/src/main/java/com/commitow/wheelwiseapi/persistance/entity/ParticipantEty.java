package com.commitow.wheelwiseapi.persistance.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Participants")
@NoArgsConstructor
@Getter
@Setter
public class ParticipantEty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participant_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private UserEty user;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "event_id")
    private EventEty event;
}
