import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  @Output() getCertifications = new EventEmitter<any>();

  certificationsProgramForm: any = FormGroup;
  certifications: any = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.certificationsProgramForm = this.fb.group({
      image: '',
      certification: ['', Validators.required],
      companyName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onChangeCertification() {
    if (this.certificationsProgramForm.valid) {
      this.certifications.push(this.certificationsProgramForm.value);
      this.certificationsProgramForm.reset();

      // send data to parent
      this.getCertifications.emit(this.certifications);
    } else {
      alert('Certifications field is empty!');
    }
  }

}
