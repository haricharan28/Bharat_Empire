package com.bharatempire.backend.room.entity;

import java.util.List;

import com.bharatempire.backend.user.entity.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String roomCode;
    
    @ManyToOne
    @JoinColumn(name = "host_id")
    private User host;
    private Integer maxPlayers;
    private String status;

    @OneToMany(mappedBy = "room")
    private List<RoomPlayers> players;
}
