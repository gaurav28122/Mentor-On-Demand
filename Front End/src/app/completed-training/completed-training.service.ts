import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CompletedTrainingService {
private trainingUrl= "http://localhost:8888/trainings";
  constructor(private http:HttpClient) { }
  getTrainings(){
return this.http.get<Training[]>(this.trainingUrl);
  }
}
