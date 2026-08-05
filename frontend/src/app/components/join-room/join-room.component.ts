import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { RoomService } from '../../services/room.service';
import { RoomPlayers } from '../../models/roomPlayers.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-join-room',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './join-room.component.html',
  styleUrl: './join-room.component.scss'
})
export class JoinRoomComponent {

  roomCode = '';

  constructor(
    private roomService: RoomService,
    private router: Router
  ) {}

  roomPlayers!:RoomPlayers;

  joinRoom() {

    const userId = Number(localStorage.getItem("userId"));

    this.roomService.joinRoom(this.roomCode, userId).subscribe({

      next: () => {
        localStorage.setItem("roomCode", this.roomCode);
        alert("Joined Successfully");

        // TODO:
        // Navigate to Lobby

        this.router.navigate(['/lobby']);

      },

      error: () => {
        alert("Invalid Room Code");

      }

    });
  }

}