package com.bharatempire.backend.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharatempire.backend.user.entity.User;
import com.bharatempire.backend.user.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User createUser(User user) {
        return userRepo.save(user);  
    }
}
