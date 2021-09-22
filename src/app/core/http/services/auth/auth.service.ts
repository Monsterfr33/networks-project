import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    let token = localStorage.getItem('access_token');
    return token;
  }
}
