import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/http/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginProgramForm: any = FormGroup;
  user: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formInit();

    if (this.authService.isUserLoggedIn()) {
      this.user = this.authService.getUser();

      this.router.navigate(['/profile/view-profile'], {state: {email: this.user.email}});
    }
    else {
      this.router.navigateByUrl('/auth/login');
    }
  }

  formInit() {
    this.loginProgramForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  login() {
    let data = {
      username: this.loginProgramForm.value.email,
      password: this.loginProgramForm.value.password,
    }

    this.http.post(environment.API_BASE_URL + '/auth/login', data).subscribe((res: any) => {
      // storing token in Frontend 
      this.authService.setToken(res.access_token);

      alert('Login Successfully.')
      this.router.navigate(['/profile/view-profile'], {state: { email: this.loginProgramForm.value.email } });
      
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    (error) => {
      alert(error);
    })
  }

}
