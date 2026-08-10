package com.bharatempire.backend.property.entity;

import com.bharatempire.backend.room.entity.Room;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertyOwners {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long gameId;
    private Long ownerId;
    private Integer houses;
    private Boolean hotel;
    private Boolean mortgaged;

    @ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

    @OneToOne
    @JoinColumn(name = "room_id")
    private Room room;
}
