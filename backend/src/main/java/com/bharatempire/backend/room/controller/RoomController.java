package com.bharatempire.backend.room.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bharatempire.backend.room.entity.Room;
import com.bharatempire.backend.room.entity.RoomPlayers;
import com.bharatempire.backend.room.service.RoomService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/room")
public class RoomController {
    
    @Autowired
    RoomService roomService;

    @PostMapping("/create")
    public ResponseEntity<Room> createRoom(@RequestBody Room room){
        roomService.saveRoom(room);
        return new ResponseEntity<>(HttpStatusCode.valueOf(200));
    }

    @PostMapping("/join")
    public ResponseEntity<Room> joinRoom(@RequestParam String roomCode, @RequestParam Long userId){
        if(roomService.joinRoom(roomCode, userId)){
            return new ResponseEntity<>(HttpStatusCode.valueOf(200));
        }
        return new ResponseEntity<>(HttpStatusCode.valueOf(400));
    }

    @GetMapping("/lobby")
    public ResponseEntity<List<RoomPlayers>> getPlayers(@RequestParam String roomCode){
        List<RoomPlayers> roomPlayers=roomService.getPlayers(roomCode);
        if(roomPlayers!=null){
            return new ResponseEntity<>(roomPlayers, HttpStatusCode.valueOf(200));
        }
        else{
            return new ResponseEntity<>(HttpStatusCode.valueOf(400));
        }
    }

    @PostMapping("/ready")
    public ResponseEntity<?> ready(@RequestParam String roomCode, @RequestParam Long userId){
        if(roomService.playerReady(roomCode, userId)){
            return new ResponseEntity<>(HttpStatusCode.valueOf(200));
        }
        return new ResponseEntity<>(HttpStatusCode.valueOf(400));
    }
}
