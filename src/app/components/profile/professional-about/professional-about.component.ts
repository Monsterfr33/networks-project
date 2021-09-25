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
  data: any = [];
  isEditMode: boolean = false;

  interestInfo: any = {};
  basicInfo: any = {};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private createProfileSrv: CreateProfileService
  ) {
    this.data = this.router.getCurrentNavigation().extras?.state?.data;
    this.isEditMode = this.router.getCurrentNavigation().extras?.state?.isEditMode;
   }

  ngOnInit(): void {
    this.formInit();

    this.interestInfo = this.createProfileSrv.getInfo('interest');
    this.basicInfo = this.createProfileSrv.getInfo('basic');

    
    this.aboutProgramForm.patchValue(this.data);
    this.educations = this.data.educations;
    this.experiences = this.data.experiences;
    this.certifications = this.data.certifications;
    this.skills = this.data.skills;
  }

  formInit() {
    this.aboutProgramForm = this.fb.group({
      title: ['', Validators.required],
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

  createProfile() {
    let data = {
      ...this.basicInfo,
      ...this.aboutProgramForm.value,
      interestHobbies: this.interestInfo,
      educations: this.educations,
      experiences: this.experiences,
      certifications: this.certifications,
      skills: this.skills
    };

    // storing data to --> data holding service (for all steps)
    this.createProfileSrv.setInfo('all', data);

    // http api call - POST
    if (this.aboutProgramForm.valid) {
      this.http.post(environment.API_BASE_URL + '/professional-about', data).subscribe(res => {
        this.router.navigateByUrl('/auth/login');
      })
    } else {
      alert('Form is empty!');
    }

    console.log(data);
  }

  updateProfile() {
    let data = {
      ...this.basicInfo,
      ...this.aboutProgramForm.value,
      interestHobbies: this.interestInfo,
      educations: this.educations,
      experiences: this.experiences,
      certifications: this.certifications,
      skills: this.skills
    };

    // storing data to --> data holding service (for all steps)
    this.createProfileSrv.setInfo('all', data);

    // http api call - POST
    if (this.aboutProgramForm.valid) {
      this.http.put(environment.API_BASE_URL + '/professional-about', this.data._id, data).subscribe(res => {
        this.router.navigate(['/profile/view-profile'], {state: {email: this.data.email}});
      })
    } else {
      alert('Form is empty!');
    }

    console.log(data);
  }

}
