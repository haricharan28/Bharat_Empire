package com.bharatempire.backend.auction.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharatempire.backend.auction.entity.AuctionBid;

@Repository
public interface AuctionBidRepo extends JpaRepository<AuctionBid,  Long>{

}
