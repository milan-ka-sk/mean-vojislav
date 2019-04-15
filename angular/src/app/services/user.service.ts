import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user){
    console.log("xxx");
    return this.http.post('http://localhost:3000/users/register', user);
  }

  login(user){
    return this.http.post('http://localhost:3000/users/login', user);
  }
}
