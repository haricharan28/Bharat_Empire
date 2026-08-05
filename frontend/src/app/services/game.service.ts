import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private router:Router, private http:HttpClient) { }

  private apiUrl='http://localhost:8080';

  startGame(userId:number, roomCode: string):Observable<any>{
    return this.http.post(`${this.apiUrl}/game?userId=${userId}&roomCode=${roomCode}`, {});
  }

}
