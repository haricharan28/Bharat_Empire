package com.bharatempire.backend.property.entity;

import java.util.List;

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
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String state;
    private Integer boardPosition;
    private Integer price;
    private Integer rent;
    private Integer mortgageValue;
    private String color;
    private String propertyType;
    private Integer houseCost;
    private Integer hotelCost;

    @OneToMany(mappedBy = "property")
    private List<PropertyOwners> propertyOwner;

}
