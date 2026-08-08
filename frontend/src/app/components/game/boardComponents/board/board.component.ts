import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tile {
  name: string;
  type: string;
  state?: string;
  price?: number;
  stateColor?: string;
  ownerColor?: string;
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

  // Top: START -> JAIL
  topTiles: Tile[] = [
    {
      name: 'START',
      type: 'CORNER',
      icon: '⭐'
    },
    {
      name: 'Hyderabad',
      type: 'PROPERTY',
      state: 'TS',
      price: 120,
      stateColor: '#8D6E63'
    },
    {
      name: 'Chance',
      type: 'SPECIAL',
      icon: '🎁'
    },
    {
      name: 'Warangal',
      type: 'PROPERTY',
      state: 'TS',
      price: 140,
      stateColor: '#8D6E63'
    },
    {
      name: 'Airport',
      type: 'SPECIAL',
      icon: '✈️'
    },
    {
      name: 'Vizag',
      type: 'PROPERTY',
      state: 'AP',
      price: 180,
      stateColor: '#4FC3F7'
    },
    {
      name: 'Income Tax',
      type: 'SPECIAL',
      icon: '💰'
    },
    {
      name: 'Vijayawada',
      type: 'PROPERTY',
      state: 'AP',
      price: 200,
      stateColor: '#4FC3F7'
    },
    {
      name: 'Railway',
      type: 'SPECIAL',
      icon: '🚆'
    },
    {
      name: 'Bengaluru',
      type: 'PROPERTY',
      state: 'KA',
      price: 240,
      stateColor: '#EC407A'
    },
    {
      name: 'JAIL',
      type: 'CORNER',
      icon: '🚔'
    }
  ];

  // Right: JAIL -> VACATION
  rightTiles: Tile[] = [
    {
      name: 'Mysuru',
      type: 'PROPERTY',
      state: 'KA',
      price: 260,
      stateColor: '#EC407A'
    },
    {
      name: 'Chennai',
      type: 'PROPERTY',
      state: 'TN',
      price: 300,
      stateColor: '#FB8C00'
    },
    {
      name: 'Coimbatore',
      type: 'PROPERTY',
      state: 'TN',
      price: 320,
      stateColor: '#FB8C00'
    },
    {
      name: 'Lucky Spin',
      type: 'SPECIAL',
      icon: '🎲'
    },
    {
      name: 'Madurai',
      type: 'PROPERTY',
      state: 'TN',
      price: 340,
      stateColor: '#FB8C00'
    },
    {
      name: 'Kochi',
      type: 'PROPERTY',
      state: 'KL',
      price: 360,
      stateColor: '#26A69A'
    },
    {
      name: 'Water',
      type: 'SPECIAL',
      icon: '🚰'
    },
    {
      name: 'Trivandrum',
      type: 'PROPERTY',
      state: 'KL',
      price: 380,
      stateColor: '#26A69A'
    },
    {
      name: 'Pune',
      type: 'PROPERTY',
      state: 'MH',
      price: 400,
      stateColor: '#E53935'
    }
  ];

  // Bottom: GO TO JAIL -> VACATION
  bottomTiles: Tile[] = [
    {
      name: 'GO TO JAIL',
      type: 'CORNER',
      icon: '🚔'
    },
    {
      name: 'Mumbai',
      type: 'PROPERTY',
      state: 'MH',
      price: 420,
      stateColor: '#E53935'
    },
    {
      name: 'Ahmedabad',
      type: 'PROPERTY',
      state: 'GJ',
      price: 440,
      stateColor: '#FDD835'
    },
    {
      name: 'Surat',
      type: 'PROPERTY',
      state: 'GJ',
      price: 460,
      stateColor: '#FDD835'
    },
    {
      name: 'Jaipur',
      type: 'PROPERTY',
      state: 'RJ',
      price: 480,
      stateColor: '#43A047'
    },
    {
      name: 'Udaipur',
      type: 'PROPERTY',
      state: 'RJ',
      price: 500,
      stateColor: '#43A047'
    },
    {
      name: 'Delhi',
      type: 'PROPERTY',
      state: 'DL',
      price: 550,
      stateColor: '#1E88E5'
    },
    {
      name: 'Kolkata',
      type: 'PROPERTY',
      state: 'WB',
      price: 580,
      stateColor: '#8E24AA'
    },
    {
      name: 'Bhubaneswar',
      type: 'PROPERTY',
      state: 'OD',
      price: 600,
      stateColor: '#00ACC1'
    },
    {
      name: 'VACATION',
      type: 'CORNER',
      icon: '🏖️'
    }
  ];

  // Left: GO TO JAIL -> START
  leftTiles: Tile[] = [
    {
      name: 'Lucknow',
      type: 'PROPERTY',
      state: 'UP',
      price: 620,
      stateColor: '#7CB342'
    },
    {
      name: 'Patna',
      type: 'PROPERTY',
      state: 'BR',
      price: 640,
      stateColor: '#6D4C41'
    },
    {
      name: 'Ranchi',
      type: 'PROPERTY',
      state: 'JH',
      price: 660,
      stateColor: '#5E35B1'
    },
    {
      name: 'Nagpur',
      type: 'PROPERTY',
      state: 'MH',
      price: 680,
      stateColor: '#E53935'
    },
    {
      name: 'Goa',
      type: 'PROPERTY',
      state: 'GA',
      price: 700,
      stateColor: '#26C6DA'
    },
    {
      name: 'Amritsar',
      type: 'PROPERTY',
      state: 'PB',
      price: 720,
      stateColor: '#3949AB'
    },
    {
      name: 'Ludhiana',
      type: 'PROPERTY',
      state: 'PB',
      price: 740,
      stateColor: '#3949AB'
    },
    {
      name: 'Shimla',
      type: 'PROPERTY',
      state: 'HP',
      price: 760,
      stateColor: '#00897B'
    },
    {
      name: 'Dehradun',
      type: 'PROPERTY',
      state: 'UK',
      price: 780,
      stateColor: '#546E7A'
    }
  ];

}