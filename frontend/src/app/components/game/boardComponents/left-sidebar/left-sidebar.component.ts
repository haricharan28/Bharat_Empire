import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {

  id: number;

  name: string;

  color: string;

  ready: boolean;

  host: boolean;

  money: number;

}

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {

  roomCode = 'ABCD12';

  round = 1;

  propertiesSold = 0;

  totalProperties = 28;

  bankMoney = 500000;

  players: Player[] = [

    {
      id: 1,
      name: 'Haricharan',
      color: '#4CAF50',
      ready: true,
      host: true,
      money: 1500
    },

    {
      id: 2,
      name: 'Rahul',
      color: '#2196F3',
      ready: true,
      host: false,
      money: 1500
    },

    {
      id: 3,
      name: 'Akhil',
      color: '#FFC107',
      ready: false,
      host: false,
      money: 1500
    },

    {
      id: 4,
      name: 'Vishnu',
      color: '#F44336',
      ready: true,
      host: false,
      money: 1500
    }

  ];

}