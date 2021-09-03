import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-about',
  templateUrl: './professional-about.component.html',
  styleUrls: ['./professional-about.component.scss']
})
export class ProfessionalAboutComponent implements OnInit {

  aboutProgramForm: any = FormGroup;
  educationProgramForm: any = FormGroup;
  experienceProgramForm: any = FormGroup;
  certificationsProgramForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.aboutProgramForm = this.fb.group({
      professionalTitle: ['', Validators.required],
      aboutUs: ['', Validators.required]
    });

    this.educationProgramForm = this.fb.group({
      universityName: ['', Validators.required],
      degree: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });

    this.experienceProgramForm = this.fb.group({
      designation: ['', Validators.required],
      companyName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });

    this.certificationsProgramForm = this.fb.group({
      designation: ['', Validators.required],
      companyName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

}
