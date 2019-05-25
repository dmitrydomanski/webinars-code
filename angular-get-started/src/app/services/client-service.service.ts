import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(public http: HttpClient) { }

  public fetchPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
