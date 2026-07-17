package com.bharatempire.backend.room.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharatempire.backend.room.entity.Room;
import com.bharatempire.backend.room.entity.RoomPlayers;
import com.bharatempire.backend.room.repository.RoomPlayersRepo;
import com.bharatempire.backend.room.repository.RoomRepo;
import com.bharatempire.backend.user.entity.User;
import com.bharatempire.backend.user.repository.UserRepo;

@Service
public class RoomService {

    @Autowired
    RoomRepo roomRepo;
    @Autowired
    UserRepo userRepo;
    @Autowired
    RoomPlayersRepo roomPlayersRepo;

    public void saveRoom(Room room) {
        roomRepo.save(room);
    }

    public boolean joinRoom(String roomCode, Long userId) {
        Optional<User> op_u=userRepo.findById(userId);
        User user=op_u.get();
        Optional<Room> op = roomRepo.findByRoomCode(roomCode);
        if(op.isPresent()){
            Room room =  op.get();
            RoomPlayers roomPlayers =new RoomPlayers();
            roomPlayers.setUser(user);
            roomPlayers.setRoom(room);
            roomPlayersRepo.save(roomPlayers);
            return true;
        }
        else{
            return false;
        }
    }

}
