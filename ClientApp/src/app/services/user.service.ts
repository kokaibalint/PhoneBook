import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  readonly rootUrl = 'https://localhost:44330';
  readonly userUrl = '/api/Users';
  list: User[];

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User>{
    return this.http.post<User>(this.rootUrl + this.userUrl, user, this.httpOptions).pipe();
  }
}
