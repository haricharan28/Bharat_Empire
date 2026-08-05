import { Component } from '@angular/core';
import { LeftSidebarComponent } from './boardComponents/left-sidebar/left-sidebar.component';
import { BoardComponent } from './boardComponents/board/board.component';
import { RightSidebarComponent } from './boardComponents/right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    LeftSidebarComponent,
    BoardComponent,
    RightSidebarComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}