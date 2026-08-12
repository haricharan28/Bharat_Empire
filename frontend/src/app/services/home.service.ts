import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private router:Router, private http:HttpClient) { }

  private apiUrl="http://localhost:8080"

  homeDetails(userId:number):Observable<any>{
    return this.http.get(this.apiUrl+"/home/"+userId);
  }

}
