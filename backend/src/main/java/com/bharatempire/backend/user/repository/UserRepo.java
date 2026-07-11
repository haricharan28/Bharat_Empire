package com.bharatempire.backend.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.user.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{

}
