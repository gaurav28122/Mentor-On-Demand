import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Technology } from '../models/technology.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminEditService {

  constructor(private http:HttpClient) {}
  private userUrl = 'http://localhost:8888/technologies';

  public createTechnology(technology){
    return this.http.post<Technology>(this.userUrl, technology);
  }
}
