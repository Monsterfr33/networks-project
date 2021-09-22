import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  token: string = "";

  constructor(
    private authService: AuthService
  ) { }

  getHeaders() {
    let headers = new HttpHeaders();

    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return headers;
  }
  
  
}
