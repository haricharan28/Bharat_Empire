package com.bharatempire.backend.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bharatempire.backend.auth.service.AuthService;
import com.bharatempire.backend.user.entity.User;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User user){
        User user2=authService.authenticate(user);
        if(user2!=null){
            return new ResponseEntity<>(user2, HttpStatusCode.valueOf(200));
        }
        else{
            return new ResponseEntity<>(HttpStatusCode.valueOf(404));
        }

    }
}
