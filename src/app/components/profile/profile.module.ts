import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { AddEditProfileComponent } from './add-edit-profile/add-edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfessionalAboutComponent } from './professional-about/professional-about.component';
import { ProfileComponent } from './profile.component';
import { EducationComponent } from './professional-about/education/education.component';
import { ExperienceComponent } from './professional-about/experience/experience.component';
import { CertificationComponent } from './professional-about/certification/certification.component';
import { SkillsComponent } from './professional-about/skills/skills.component';


@NgModule({
  declarations: [AddEditProfileComponent, ViewProfileComponent, ProfessionalAboutComponent, ProfileComponent, EducationComponent, ExperienceComponent, CertificationComponent, SkillsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfileModule { }
