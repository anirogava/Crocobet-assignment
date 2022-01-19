import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Posts, UserResult } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // getUser function gets all users list from api
  getUser(): Observable<UserResult[]> {
    return this.http.get<UserResult[]>(`${environment.base_url}/users`);
  }

  // getOneUser function gets users nformation by id
  getOneUser(id: number) {
    return this.http.get<UserResult>(`${environment.base_url}/users/${id}`);
  }

  // getPosts function gets posts from users by id
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${environment.base_url}/posts`);
  }
}
