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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.skills = this.data;
  }

  formInit(): void {
    this.skillsProgramForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onChangeSkill() {
    if (this.skillsProgramForm.valid) {
      this.skills.push(this.skillsProgramForm.value);
      this.skillsProgramForm.reset();

      // send data to parent
      this.getSkills.emit(this.skills);
    } else {
      alert('Skills field is empty!');
    }
  }

}
