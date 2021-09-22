import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Output() getEducations = new EventEmitter<any>();

  educationProgramForm: any = FormGroup;
  educations: any = [];

  // image-uploader
  educationPreview: any = "";
  imageEducationUploaded: boolean = false;
  isEducationReset: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.educationProgramForm = this.fb.group({
      image: [''],
      universityName: ['', Validators.required],
      degree: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onChangeEducation() {
    if (this.educationProgramForm.valid) {
      this.educations.push(this.educationProgramForm.value);
      this.educationProgramForm.reset();

      // send data to parent
      this.getEducations.emit(this.educations);
    } else {
      alert('Education field is empty!');
    }
  }

  onImageEducationPreview(event) {
    this.educationPreview = event.preview;
    this.imageEducationUploaded = event.imageUploaded;

    // getting url of saved image from firebase storage bucket
    console.log(this.educationPreview);

    this.educationProgramForm.patchValue({
      image: this.educationPreview
    })
  }

}
