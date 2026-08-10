package com.bharatempire.backend.property.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.property.entity.PropertyOwners;

@Repository
public interface PropertyOwnerRepo extends JpaRepository<PropertyOwners, Long>{

}
