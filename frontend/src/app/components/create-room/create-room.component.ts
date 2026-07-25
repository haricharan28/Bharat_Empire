import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.scss'
})
export class CreateRoomComponent {

  room: Room = {

    roomCode: '',

    host: {

      id: Number(localStorage.getItem("userId"))

    },

    maxPlayers: 4,

    status: "WAITING"

  };

  constructor(
      private roomService: RoomService,
      private router: Router
  ) {

      this.generateRoomCode();

  }

  generateRoomCode() {

      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      let code = "";

      for (let i = 0; i < 6; i++) {

          code += chars.charAt(
              Math.floor(Math.random() * chars.length)
          );

      }

      this.room.roomCode = code;

  }

  createRoom() {

      this.room.host.id = Number(localStorage.getItem("userId"));

      this.roomService.createRoom(this.room).subscribe({

          next: () => {

              alert("Room Created Successfully");

              // TODO:
              // Navigate to Lobby

              this.router.navigate(['/lobby']);

          },

          error: () => {

              alert("Failed to create room");

          }

      });

  }

}