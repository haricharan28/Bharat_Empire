package com.bharatempire.backend.property.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer boardPosition;
    private Integer price;
    private Integer rent;
    private Integer mortgageValue;
    private String color;
    private String propertyType;
    private Integer houseCost;
    private Integer hotelCost;

}
