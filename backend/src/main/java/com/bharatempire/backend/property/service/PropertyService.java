package com.bharatempire.backend.property.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharatempire.backend.property.entity.Property;
import com.bharatempire.backend.property.repository.PropertyRepo;

@Service
public class PropertyService {

    @Autowired
    PropertyRepo propertyRepo;
    public boolean addProperty(Property property) {
        if(propertyRepo.save(property)!=null){
            return true;
        }
        else{
            return false;
        }
    }

}
