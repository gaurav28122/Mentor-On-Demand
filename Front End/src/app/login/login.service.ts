import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn:'root'
}
)
export class LoginService {

  

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8888/users';
  //private userUrl = '/api';
  private mentorUrl = 'http://localhost:8888/mentors';
  public getUsers(userName, password) {
    return this.http.get<User>(this.userUrl+"/"+userName+"/"+password);
  }
  public getUser(id){
    return this.http.get<User>(this.userUrl+"/"+id)
  }

  public getMentors(userName: string, password: string) {
    return this.http.get<Mentor>(this.mentorUrl+"/"+userName+"/"+password );
  }

  public getMentor(id){
    return this.http.get<Mentor>(this.mentorUrl+"/"+id)
  }
}
