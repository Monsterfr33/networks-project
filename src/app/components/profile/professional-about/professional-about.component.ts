import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-about',
  templateUrl: './professional-about.component.html',
  styleUrls: ['./professional-about.component.scss']
})
export class ProfessionalAboutComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      professionalTitle: ['', Validators.required],
      aboutUs: ['', Validators.required]
    });
  }

}
