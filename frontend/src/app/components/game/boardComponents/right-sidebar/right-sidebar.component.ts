import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss'
})
export class RightSidebarComponent {

  currentPlayer = 'Haricharan';

  balance = 1500;

  currentProperty = {

    name: 'Hyderabad',

    state: 'Telangana',

    price: 120,

    rent: 15,

    owner: 'Bank',

    color: '#8D6E63'

  };

  eventLog = [

    '🎲 Rolled 7',

    '🚶 Moved to Hyderabad',

    '🏠 Property available to buy'

  ];

}