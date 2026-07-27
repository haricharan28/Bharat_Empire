import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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

  playersOnline = 248;

  activeRooms = 37;

  gamesPlayed = 56;

  rank = "#18";

  constructor(private router: Router) {}

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