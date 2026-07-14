package com.bharatempire.backend.room.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.room.entity.RoomPlayers;

@Repository
public interface RoomPlayersRepo extends JpaRepository<RoomPlayers, Long>{

}
