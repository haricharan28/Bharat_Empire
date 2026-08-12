import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HomeService } from '../../services/home.service';

interface HomeDTO {
  user: {
    id: number;
    username: string;
    avatar: string;
    coins: number;
    gamesPlayed: number;
    gamesWon: number;
  };
  roomCount: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // =========================
  // TODO: Fetch from backend
  // =========================

  username = localStorage.getItem("username");

  playersOnline = 0;

  activeRooms = 0;

  gamesPlayed = 0;

  rank = "";
  
  constructor(private router: Router, private homeService:HomeService) {}

  ngOnInit():void{
    this.homeService.homeDetails(Number(localStorage.getItem("userId"))).subscribe({
      next:(value)=>{
        console.log(value)
        // this.playersOnline=value.user.playersOnline;
        this.activeRooms=value.roomCount;
        this.gamesPlayed=value.user.gamesPlayed;
        this.rank=value.user.id;
      }
    });
  }
  

  logout() {

    localStorage.clear();

    this.router.navigate(['/login']);

  }

  create(){
    this.router.navigate(['/create/room']);
  }

  join(){
    this.router.navigate(['/join/room']);
  }

}