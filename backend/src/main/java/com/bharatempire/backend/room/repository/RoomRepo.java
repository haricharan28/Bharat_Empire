package com.bharatempire.backend.room.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.room.entity.Room;

@Repository
public interface RoomRepo extends JpaRepository<Room, Long>{

}
