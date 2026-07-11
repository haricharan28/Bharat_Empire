package com.bharatempire.backend.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.auction.entity.Auction;

@Repository
public interface AuctionRepo extends JpaRepository<Auction, Long>{

}
