import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:3000/api/v1/user/';

  constructor(private http: HttpClient) {}

  sinsin(user: any) {
    return this.http.post(`${this.url}login`, user, { responseType: 'text' });
  }

  posrtUser(user: User) {
    return this.http.post(`${this.url}register`, user,{ responseType: 'text' });
  }

  getUser(token: string) {
    const headers= new HttpHeaders()
  .set('token', token)
    return this.http.get(this.url, {'headers': headers})
  }
}
