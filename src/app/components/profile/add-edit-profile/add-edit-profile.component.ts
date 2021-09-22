import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateProfileService } from 'src/app/core/http/services/create-profile/create-profile.service';

@Component({
  selector: 'app-add-edit-profile',
  templateUrl: './add-edit-profile.component.html',
  styleUrls: ['./add-edit-profile.component.scss']
})
export class AddEditProfileComponent implements OnInit {
  
  selected: any = [];
  users: any = [];
  programForm: any = FormGroup;

  // image-uploader
  preview: any = "";
  imageUploaded: boolean = false;
  isReset: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private createProfileSrv: CreateProfileService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getProfile();

    this.selected = this.createProfileSrv.getInfo('interest');
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getOnItemClick(event) {
    this.router.navigateByUrl('profile/view-profile', {state: {profile: event}});
  }

  goProfessionalAbout() {
    let data = {
      ...this.programForm.value,
      image: this.preview
    };

    this.createProfileSrv.setInfo('basic', data);
    this.router.navigateByUrl('/profile/professional-about-profile');
  }

  onImagePreview(event) {
    this.preview = event.preview;
    this.imageUploaded = event.imageUploaded;

    // getting url of saved image from firebase storage bucket
    console.log(this.preview);
  }

  getProfile() {
    this.http.get(environment.API_BASE_URL + '/professional-about').subscribe(res => {
      this.users = res

      console.log(this.users);
    })
  }

}
