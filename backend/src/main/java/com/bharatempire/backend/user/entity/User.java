package com.bharatempire.backend.user.entity;

import java.util.List;

import com.bharatempire.backend.room.entity.Room;
import com.bharatempire.backend.room.entity.RoomPlayers;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String password;
    private String avatar;
    private Double coins;
    private Long gamesPlayed;
    private Long gamesWon;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<RoomPlayers> roomPlayers;

    @OneToMany(mappedBy = "host")
    @JsonIgnore
    private List<Room> hostedRooms;

}
