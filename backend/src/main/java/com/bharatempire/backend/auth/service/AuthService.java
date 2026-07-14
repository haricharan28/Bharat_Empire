package com.bharatempire.backend.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharatempire.backend.user.entity.User;
import com.bharatempire.backend.user.repository.UserRepo;

@Service
public class AuthService {

    @Autowired
    UserRepo userRepo;

    public boolean authenticate(User user) {
        Optional<User> op=userRepo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if(op.isPresent()){
            return true;
        }else{
            return false;
        }
    }

}
