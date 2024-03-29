package com.commitow.wheelwiseapi.persistance.repository;

import com.commitow.wheelwiseapi.persistance.entity.EventEty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<EventEty, Long> {
}
