import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BoardTile {

  id: number;

  name: string;

  type: string;

  state?: string;

  price?: number;

  color?: string;

  icon?: string;

}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  // =========================================================
  // TODO:
  // Fetch board configuration from backend later
  // =========================================================

  topTiles: BoardTile[] = [

    {
      id: 0,
      name: 'GO',
      type: 'GO',
      icon: '🏁'
    },

    {
      id: 1,
      name: 'Hyderabad',
      type: 'PROPERTY',
      state: 'TG',
      price: 120,
      color: '#8D6E63'
    },

    {
      id: 2,
      name: 'Chance',
      type: 'CHANCE',
      icon: '🎁'
    },

    {
      id: 3,
      name: 'Warangal',
      type: 'PROPERTY',
      state: 'TG',
      price: 140,
      color: '#8D6E63'
    },

    {
      id: 4,
      name: 'Airport',
      type: 'AIRPORT',
      icon: '✈️'
    },

    {
      id: 5,
      name: 'Vizag',
      type: 'PROPERTY',
      state: 'AP',
      price: 180,
      color: '#4FC3F7'
    },

    {
      id: 6,
      name: 'Income Tax',
      type: 'TAX',
      icon: '💰'
    },

    {
      id: 7,
      name: 'Vijayawada',
      type: 'PROPERTY',
      state: 'AP',
      price: 200,
      color: '#4FC3F7'
    },

    {
      id: 8,
      name: 'Railway',
      type: 'RAILWAY',
      icon: '🚆'
    },

    {
      id: 9,
      name: 'Bengaluru',
      type: 'PROPERTY',
      state: 'KA',
      price: 240,
      color: '#EC407A'
    },

    {
      id: 10,
      name: 'Jail',
      type: 'JAIL',
      icon: '🚔'
    }

  ];

  rightTiles: BoardTile[] = [

    {
      id: 11,
      name: 'Mysuru',
      type: 'PROPERTY',
      state: 'KA',
      price: 260,
      color: '#EC407A'
    },

    {
      id: 12,
      name: 'Chennai',
      type: 'PROPERTY',
      state: 'TN',
      price: 300,
      color: '#FB8C00'
    },

    {
      id: 13,
      name: 'Coimbatore',
      type: 'PROPERTY',
      state: 'TN',
      price: 320,
      color: '#FB8C00'
    },

    {
      id: 14,
      name: 'Lucky Spin',
      type: 'CHANCE',
      icon: '🎲'
    },

    {
      id: 15,
      name: 'Madurai',
      type: 'PROPERTY',
      state: 'TN',
      price: 340,
      color: '#FB8C00'
    },

    {
      id: 16,
      name: 'Kochi',
      type: 'PROPERTY',
      state: 'KL',
      price: 360,
      color: '#26A69A'
    },

    {
      id: 17,
      name: 'Water',
      type: 'UTILITY',
      icon: '🚰'
    },

    {
      id: 18,
      name: 'Trivandrum',
      type: 'PROPERTY',
      state: 'KL',
      price: 380,
      color: '#26A69A'
    },

    {
      id: 19,
      name: 'Pune',
      type: 'PROPERTY',
      state: 'MH',
      price: 400,
      color: '#E53935'
    }

  ];

  bottomTiles: BoardTile[] = [

    {
      id: 20,
      name: 'Vacation',
      type: 'VACATION',
      icon: '🏖️'
    },

    {
      id: 21,
      name: 'Mumbai',
      type: 'PROPERTY',
      state: 'MH',
      price: 420,
      color: '#E53935'
    },

    {
      id: 22,
      name: 'Ahmedabad',
      type: 'PROPERTY',
      state: 'GJ',
      price: 440,
      color: '#FDD835'
    },

    {
      id: 23,
      name: 'Surat',
      type: 'PROPERTY',
      state: 'GJ',
      price: 460,
      color: '#FDD835'
    },

    {
      id: 24,
      name: 'Jaipur',
      type: 'PROPERTY',
      state: 'RJ',
      price: 480,
      color: '#43A047'
    },

    {
      id: 25,
      name: 'Udaipur',
      type: 'PROPERTY',
      state: 'RJ',
      price: 500,
      color: '#43A047'
    },

    {
      id: 26,
      name: 'Delhi',
      type: 'PROPERTY',
      state: 'DL',
      price: 550,
      color: '#1E88E5'
    },

    {
      id: 27,
      name: 'Kolkata',
      type: 'PROPERTY',
      state: 'WB',
      price: 580,
      color: '#8E24AA'
    },

    {
      id: 28,
      name: 'Bhubaneswar',
      type: 'PROPERTY',
      state: 'OD',
      price: 600,
      color: '#00ACC1'
    },

    {
      id: 29,
      name: 'Start',
      type: 'START',
      icon: '⭐'
    }

  ];

  leftTiles: BoardTile[] = [

    {
      id: 30,
      name: 'Lucknow',
      type: 'PROPERTY',
      state: 'UP',
      price: 620,
      color: '#7CB342'
    },

    {
      id: 31,
      name: 'Patna',
      type: 'PROPERTY',
      state: 'BR',
      price: 640,
      color: '#6D4C41'
    },

    {
      id: 32,
      name: 'Ranchi',
      type: 'PROPERTY',
      state: 'JH',
      price: 660,
      color: '#5E35B1'
    },

    {
      id: 33,
      name: 'Nagpur',
      type: 'PROPERTY',
      state: 'MH',
      price: 680,
      color: '#E53935'
    },

    {
      id: 34,
      name: 'GA',
      type: 'PROPERTY',
      state: 'GA',
      price: 700,
      color: '#26C6DA'
    },

    {
      id: 35,
      name: 'Amritsar',
      type: 'PROPERTY',
      state: 'PB',
      price: 720,
      color: '#3949AB'
    },

    {
      id: 36,
      name: 'Ludhiana',
      type: 'PROPERTY',
      state: 'PB',
      price: 740,
      color: '#3949AB'
    },

    {
      id: 37,
      name: 'Shimla',
      type: 'PROPERTY',
      state: 'HP',
      price: 760,
      color: '#00897B'
    },

    {
      id: 38,
      name: 'Dehradun',
      type: 'PROPERTY',
      state: 'Uttarakhand',
      price: 780,
      color: '#546E7A'
    }

  ];

}