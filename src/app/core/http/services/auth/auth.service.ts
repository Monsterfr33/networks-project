import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private location: Location
  ) { }

  isUserLoggedIn(): boolean {
    let user = this.getUser();

    if(user?._id) return true;
    else return false;
  }

  setUser(user: any) {
    let data = JSON.stringify(user);
    localStorage.setItem('user', data);
  }

  getUser() {
    let user = localStorage.getItem('user');
    return JSON.parse(user);
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    let token = localStorage.getItem('access_token');
    return token;
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
