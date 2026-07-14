package com.bharatempire.backend.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bharatempire.backend.auth.service.AuthService;
import com.bharatempire.backend.user.entity.User;

@RestController
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user){
        if(authService.authenticate(user)){
            return new ResponseEntity<>("Successss", HttpStatusCode.valueOf(200));
        }
        else{
            return new ResponseEntity<>(HttpStatusCode.valueOf(404));
        }

    }

}
