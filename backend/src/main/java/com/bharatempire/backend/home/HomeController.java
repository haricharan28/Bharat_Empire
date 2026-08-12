package com.bharatempire.backend.home;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {

    @Autowired
    HomeService homeService;

    @GetMapping("/home/{userId}")
    public ResponseEntity<HomeDTO> homeInfo(@PathVariable Long userId){
        HomeDTO homeDTO=homeService.getHome(userId);
        return new ResponseEntity<>(homeDTO, HttpStatusCode.valueOf(200));
    }

}
