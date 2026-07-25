package com.bharatempire.backend.room.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bharatempire.backend.room.entity.Room;
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
}
