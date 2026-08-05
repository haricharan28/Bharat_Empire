package com.bharatempire.backend.game.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharatempire.backend.room.entity.Room;
import com.bharatempire.backend.room.entity.RoomPlayers;
import com.bharatempire.backend.room.repository.RoomPlayersRepo;
import com.bharatempire.backend.room.repository.RoomRepo;
import com.bharatempire.backend.user.entity.User;
import com.bharatempire.backend.user.repository.UserRepo;

@Service
public class StartGameService {

    @Autowired
    RoomRepo roomRepo;
    @Autowired
    UserRepo userRepo;
    @Autowired
    RoomPlayersRepo roomPlayersRepo;

    public boolean startGame(Long userId, String roomCode) {
        Room room=roomRepo.findByRoomCode(roomCode).orElse(null);
        List<RoomPlayers> roomPlayers=roomPlayersRepo.findByRoom(room);
        Boolean roomStatus=true;
        for(RoomPlayers players: roomPlayers){
            if(!players.getIsReady()){
                roomStatus=false;
                break;
            }
        }
        return roomStatus;
    }

}
