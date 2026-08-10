package com.bharatempire.backend.property.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bharatempire.backend.property.entity.Property;
import com.bharatempire.backend.property.service.PropertyService;

@CrossOrigin(origins = "*")
@RestController
public class PropertyController {

    @Autowired
    PropertyService propertyService;

    @RequestMapping("/admin")
    public ResponseEntity<?> addProperty(@RequestBody Property property){
        if(propertyService.addProperty(property)){
            return new ResponseEntity<>(property, HttpStatusCode.valueOf(200));
        }else{
            return new ResponseEntity<>(HttpStatusCode.valueOf(400));
        }
    }

}
