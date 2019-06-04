import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  uri: String = 'http://localhost:5000/'

  getUserDetails(username: String, password: String) {
    console.log('reached service');
    this.http.post(`${this.uri}`, {user: username, password: password})
  }
}
