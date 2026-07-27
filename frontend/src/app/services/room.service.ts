import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl='http://localhost:8080/room'
  
  constructor(private http:HttpClient) { }

  createRoom(room: Room):Observable<any>{
    return this.http.post(this.apiUrl+"/create", room);
  }

  joinRoom(roomCode: string, userId:number):Observable<any>{
    return this.http.post(`${this.apiUrl}/join?roomCode=${roomCode}&userId=${userId}`, {});
  }

  getPlayers(roomCode:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/lobby?roomCode=${roomCode}`);
  }

  playerReady(roomCode:string, userId:number):Observable<any>{
    return this.http.post(`${this.apiUrl}/ready?roomCode=${roomCode}&userId=${userId}`, {});
  }
}


