import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { AddEditProfileComponent } from './add-edit-profile/add-edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfessionalAboutComponent } from './professional-about/professional-about.component';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [AddEditProfileComponent, ViewProfileComponent, ProfessionalAboutComponent, ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfileModule { }
