import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/core/http/config/config.service';
import { AuthService } from 'src/app/core/http/services/auth/auth.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  data: any = {};
  email: string = "";
  user: any = {};

  educations: any = [];
  experiences: any = [];
  certifications: any = [];
  skills: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private config: ConfigService,
    private authService: AuthService
  ) {
    this.data = this.router.getCurrentNavigation().extras.state?.profile;
    this.email = this.router.getCurrentNavigation().extras.state?.email;
  }

  ngOnInit(): void {
    if(this.email) this.getProfile();

    if (this.authService.isUserLoggedIn()) {
      this.user = this.authService.getUser();
      this.email = this.user.email;

      this.getProfile();
    } else {
      this.router.navigateByUrl('/auth/login');
    }
  }

  edit(data) {
    this.router.navigate(['/profile/professional-about-profile'], { state: { data: this.data, isEditMode: true} })
  }

  getProfile() {
    let params = new HttpParams();
    params.set('email', this.email);

    this.http.get(
      environment.API_BASE_URL + '/professional-about', 
      {params: params, headers: this.config.getHeaders()}
    ).subscribe(res => {
      this.data = res[0];
      this.authService.setUser(this.data);
    })
  }

}
