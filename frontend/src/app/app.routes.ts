import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { RoomLobbyComponent } from './components/room-lobby/room-lobby.component';
import { JoinRoomComponent } from './components/join-room/join-room.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'create/room',
        component:CreateRoomComponent
    },
    {
        path:'join/room',
        component:JoinRoomComponent
    },
    {
        path:'lobby',
        component:RoomLobbyComponent
    }
];
