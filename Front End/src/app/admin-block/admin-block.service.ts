import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminBlockService {

  constructor(private http:HttpClient) {}
  private userUrl = 'http://localhost:8888/users';
  private mentorUrl = 'http://localhost:8888/mentors';
  public getUsers(){
    return this.http.get<User[]>(this.userUrl)
  }
  public getMentors(){
    return this.http.get<Mentor[]>(this.mentorUrl)
  }
  public getUser(id){
    return this.http.get<User>(this.userUrl+"/"+id)
  }
  public getMentor(id){
    return this.http.get<Mentor>(this.mentorUrl+"/"+id)
  }
  public updateUser(user){
    return this.http.put<User>(this.userUrl+"/"+user.id,user)
  }
  public updateMentor(mentor){
    return this.http.put<Mentor>(this.mentorUrl+"/"+mentor.id,mentor)
  }
}
