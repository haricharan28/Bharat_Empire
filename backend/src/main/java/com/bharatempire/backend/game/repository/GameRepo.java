package com.bharatempire.backend.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.game.entity.Game;

@Repository
public interface GameRepo extends JpaRepository<Game, Long>{

}
