import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input('data') data: any = [];
  @Output() getExperiences = new EventEmitter<any>();

  experienceProgramForm: any = FormGroup;
  experiences: any = [];

  // image-uploader
  experiencePreview: any = "";
  imageExperienceUploaded: boolean = false;
  isExperienceReset: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.experiences = this.data;
  }

  formInit(): void {
    this.experienceProgramForm = this.fb.group({
      image: [''],
      designation: ['', Validators.required],
      // companyName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onChangeExperience() {
    if (this.experienceProgramForm.valid) {
      this.experiences.push(this.experienceProgramForm.value);
      this.experienceProgramForm.reset();
      this.isExperienceReset = !this.isExperienceReset;

      // send data to parent
      this.getExperiences.emit(this.experiences);
    } else {
      alert('Experiences field is empty!');
    }
  }

  onImageExperiencePreview(event) {
    this.experiencePreview = event.preview;
    this.imageExperienceUploaded = event.imageUploaded;

    // getting url of saved image from firebase storage bucket
    console.log(this.experiencePreview);

    this.experienceProgramForm.patchValue({
      image: this.experiencePreview
    })
  }

}
