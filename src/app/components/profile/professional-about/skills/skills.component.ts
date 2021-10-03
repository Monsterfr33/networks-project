import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input('data') data: any = [];
  @Output() getSkills = new EventEmitter<any>();

  skillsProgramForm: any = FormGroup;
  skills: any = [];

  // image-uploader
  skillPreview: any = "";
  imageSkillUploaded: boolean = false;
  isSkillReset: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.skills = this.data;
  }

  formInit(): void {
    this.skillsProgramForm = this.fb.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onChangeSkill() {
    if (this.skillsProgramForm.valid) {
      this.skills.push(this.skillsProgramForm.value);
      this.skillsProgramForm.reset();
      this.isSkillReset = !this.isSkillReset;

      // send data to parent
      this.getSkills.emit(this.skills);
    } else {
      alert('Skills field is empty!');
    }
  }

  onImageSkillPreview(event) {
    this.skillPreview = event.preview;
    this.imageSkillUploaded = event.imageUploaded;

    // getting url of saved image from firebase storage bucket
    console.log(this.skillPreview);

    this.skillsProgramForm.patchValue({
      image: this.skillPreview
    })
  }

}
