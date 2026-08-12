package com.bharatempire.backend.home;

import java.util.List;

import com.bharatempire.backend.room.entity.Room;
import com.bharatempire.backend.user.entity.User;

public class HomeDTO {
    public User user;
    public Integer roomCount;

    public HomeDTO(User user1, Integer roomCount1){
        this.user=user1;
        this.roomCount=roomCount1;
    }
}
