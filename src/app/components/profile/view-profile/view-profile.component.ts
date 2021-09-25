import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/core/http/config/config.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  data: any = {};
  email: string = "";

  educations: any = [];
  experiences: any = [];
  certifications: any = [];
  skills: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private config: ConfigService
  ) {
    this.data = this.router.getCurrentNavigation().extras.state?.profile;
    this.email = this.router.getCurrentNavigation().extras.state?.email;
  }

  ngOnInit(): void {
    if(this.email) this.getProfile();
  }

  edit(data) {
    this.router.navigate(['/profile/professional-about-profile'], { state: { data: this.data} })
  }

  getProfile() {
    let params = new HttpParams();
    params.set('email', this.email);

    this.http.get(
      environment.API_BASE_URL + '/professional-about', 
      {params: params, headers: this.config.getHeaders()}
    ).subscribe(res => {
      this.data = res[0];
    })
  }

}
