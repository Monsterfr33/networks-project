import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.user = this.authService.getUser();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
