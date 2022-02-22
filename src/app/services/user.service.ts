import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  githubUrl = 'https://api.github.com/users'
  /*'https://api.github.com/users/'*/;
  /*'https://api.github.com/users/ahos333/repos'*/
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.githubUrl}?per_page=10`);
  } 

  public getUser(username:string): Observable<User[]> {
    return this.http.get<User[]>(`${this.githubUrl}/${username}`);
  }
}
