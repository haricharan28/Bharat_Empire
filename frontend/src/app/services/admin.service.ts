import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl="http://localhost:8080"

  constructor(private http:HttpClient) { }

  addProperty(property:Property){
    return this.http.post(this.apiUrl+"/admin", property);
  }
}
