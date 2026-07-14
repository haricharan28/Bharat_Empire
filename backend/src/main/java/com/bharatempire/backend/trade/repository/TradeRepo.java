package com.bharatempire.backend.trade.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.trade.entity.Trade;

@Repository
public interface TradeRepo extends JpaRepository<Trade, Long>{

}
