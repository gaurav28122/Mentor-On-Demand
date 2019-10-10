 import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SignUpService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8888/users';
  private mentorUrl = 'http://localhost:8888/mentors';
  //private userUrl = '/api';

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
  public createMentor(mentor){
    return this.http.post<Mentor>(this.mentorUrl, mentor);
  }

}
