export interface Room{
    roomCode:string;
    host:{
        id:number;
    };
    maxPlayers:number;
    status:string;
}