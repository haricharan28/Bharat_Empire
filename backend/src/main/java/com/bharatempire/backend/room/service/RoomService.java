package com.bharatempire.backend.room.service;

import java.util.List;
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

    // public RoomPlayers getRoom(String roomCode) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'getRoom'");
    // }

    public List<RoomPlayers> getPlayers(String roomCode) {
        Room room=roomRepo.findByRoomCode(roomCode).orElse(null);
        if(room!=null){
            return roomPlayersRepo.findByRoom(room);
        }
        else{
            return null;
        }
    }

    public boolean playerReady(String roomCode, Long userId) {
        Room room=roomRepo.findByRoomCode(roomCode).orElse(null);
        User user=userRepo.findById(userId).orElse(null);
        // List<RoomPlayers> roomPlayers=roomPlayersRepo.findByRoom(room);
        RoomPlayers roomPlayers=roomPlayersRepo.findByRoomAndUser(room, user).orElse(null);
        roomPlayers.setIsReady(true);
        if(roomPlayersRepo.save(roomPlayers)!=null){
            return true;
        }
        else{
            return false;
        }

    }

}
