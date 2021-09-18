import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateProfileService } from 'src/app/core/http/services/create-profile/create-profile.service';

@Component({
  selector: 'app-professional-about',
  templateUrl: './professional-about.component.html',
  styleUrls: ['./professional-about.component.scss']
})
export class ProfessionalAboutComponent implements OnInit {

  aboutProgramForm: any = FormGroup;
  educations: any = [];
  experiences: any = [];
  certifications: any = [];
  skills: any = [];

  interestInfo: any = {};
  basicInfo: any = {};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private createProfileSrv: CreateProfileService
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.interestInfo = this.createProfileSrv.getInfo('interest');
    this.basicInfo = this.createProfileSrv.getInfo('basic');
  }

  formInit() {
    this.aboutProgramForm = this.fb.group({
      professionalTitle: ['', Validators.required],
      aboutUs: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
    });
  }

  onGetEducations(event) {
    this.educations = event;
  }

  onGetExperiences(event) {
    this.experiences = event;
  }

  onGetCertifications(event) {
    this.certifications = event;
  }

  onGetSkills(event) {
    this.skills = event;
  }

  updateProfile() {
    let data = {
      ...this.interestInfo,
      ...this.basicInfo,
      ...this.aboutProgramForm.value,
      educations: this.educations,
      experiences: this.experiences,
      certifications: this.certifications,
      skills: this.skills
    };

    // storing data to --> data holding service (for all steps)
    this.createProfileSrv.setInfo('all', data);

    // http api call - POST
    if (this.aboutProgramForm.valid) {
      this.http.post(environment.API_BASE_URL + '/api/v1/professional-about', data).subscribe(res => {
        alert('Profile Successfully Created.')
        this.router.navigateByUrl('/homepage');
      },
      (error) => {
        alert(error);
      })
    } else {
      alert('Form is empty!');
    }

    console.log(data);
  }

}
