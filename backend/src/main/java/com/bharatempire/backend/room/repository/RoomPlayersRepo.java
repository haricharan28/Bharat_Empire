package com.bharatempire.backend.room.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.room.entity.Room;
import com.bharatempire.backend.room.entity.RoomPlayers;
import com.bharatempire.backend.user.entity.User;

@Repository
public interface RoomPlayersRepo extends JpaRepository<RoomPlayers, Long>{

    // Optional<RoomPlayers> findByUserId(Long userId);

    List<RoomPlayers> findByRoom(Room room);
    Optional<RoomPlayers> findByRoomAndUser(Room room, User user);

}
