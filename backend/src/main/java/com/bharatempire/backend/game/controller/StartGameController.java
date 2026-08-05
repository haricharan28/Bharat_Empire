package com.bharatempire.backend.game.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bharatempire.backend.game.service.StartGameService;

@RestController
@CrossOrigin(origins = "*")
public class StartGameController {

    @Autowired
    StartGameService startGameService;

    @RequestMapping("/game")
    public ResponseEntity<?> startGame(@RequestParam Long userId, String roomCode){
        if(startGameService.startGame(userId, roomCode)){
            return new ResponseEntity<>(HttpStatusCode.valueOf(200));
        }
        else{
            return new ResponseEntity<>(HttpStatusCode.valueOf(404));
        }
    }
}
