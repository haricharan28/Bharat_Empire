package com.bharatempire.backend.home;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharatempire.backend.room.entity.Room;
import com.bharatempire.backend.room.repository.RoomRepo;
import com.bharatempire.backend.user.entity.User;
import com.bharatempire.backend.user.repository.UserRepo;

@Service
public class HomeService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    RoomRepo roomRepo;

    public HomeDTO getHome(Long userId) {
        User user=userRepo.findById(userId).orElse(null);
        List<Room> rooms=roomRepo.findAll();
        Integer roomCount=rooms.size();
        
        HomeDTO homeDTO=new HomeDTO(user, roomCount);
        return homeDTO;

    }

}
