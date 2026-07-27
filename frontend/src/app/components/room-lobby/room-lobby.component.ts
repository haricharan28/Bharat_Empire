import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { RoomPlayers } from '../../models/roomPlayers.model';
import { RoomService } from '../../services/room.service';

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
export class RoomLobbyComponent implements OnInit {

  // ==========================
  // Room details
  // ==========================

  roomCode = localStorage.getItem("roomCode")!;
  userId:number=Number(localStorage.getItem("userId")!);

  maxPlayers = 0;

  status = "WAITING";

  // ==========================
  // Players
  // ==========================

  players = [
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
    },
    {
      username: "",
      host: false,
      ready: false
    }
  ];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {

    this.roomService.getPlayers(this.roomCode).subscribe({

      next: (response: RoomPlayers[]) => {

        if (response.length > 0) {
          this.maxPlayers = response[0].room.maxPlayers;
          this.status = response[0].room.status;
        }

        this.players = response.map(player => ({
          username: player.user.username,
          host: player.room.host.id === player.user.id,
          ready: player.isReady ?? false
        }));

        while (this.players.length < this.maxPlayers) {
          this.players.push({
            username: "",
            host: false,
            ready: false
          });
        }

      },

      error: (err) => {
        console.error(err);
      }

    });

  }

  copyRoomCode() {

    navigator.clipboard.writeText(this.roomCode);

    alert("Room Code Copied!");

  }


  ready() {

    // TODO:
    // Call backend ready endpoint

    this.roomService.playerReady(this.roomCode, this.userId).subscribe({
      next:(response)=>{
        console.log("Player is ready", response);
        this.ngOnInit();
      },
      error:(err)=>{
        console.error(err);
      }
    });

  }

  startGame() {

    // TODO:
    // Start game when everyone is ready

  }

}