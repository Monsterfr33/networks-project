import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.aboutProgramForm = this.fb.group({
      professionalTitle: ['', Validators.required],
      aboutUs: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
    });
  }

  onGetEducations(event) {
    this.educations = event;
    console.log(this.educations);
  }

  onGetExperiences(event) {
    this.experiences = event;
    console.log(this.experiences);
  }

  onGetCertifications(event) {
    this.certifications = event;
    console.log(this.certifications);
  }

  onGetSkills(event) {
    this.skills = event;
    console.log(this.skills);
  }

}
