import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-lobby',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './room-lobby.component.html',
  styleUrl: './room-lobby.component.scss'
})
export class RoomLobbyComponent {

  // ==========================
  // TODO: Fetch room details
  // ==========================

  roomCode = "AB12CD";

  maxPlayers = 4;

  status = "WAITING";

  // ==========================
  // TODO: Fetch players
  // ==========================

  players = [

    {
      username: "Haricharan",
      host: true,
      ready: true
    },

    {
      username: "",
      host: false,
      ready: false
    },

    {
      username: "",
      host: false,
      ready: false
    },

    {
      username: "",
      host: false,
      ready: false
    }

  ];

  copyRoomCode() {

    navigator.clipboard.writeText(this.roomCode);

    alert("Room Code Copied!");

  }

  ready() {

    // TODO:
    // Call backend ready endpoint

  }

  startGame() {

    // TODO:
    // Start game when everyone is ready

  }

}