import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { AddEditProfileComponent } from './add-edit-profile/add-edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfessionalAboutComponent } from './professional-about/professional-about.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: AddEditProfileComponent
      },
      {
        path: 'add-edit-profile',
        component: AddEditProfileComponent
      },
      {
        path: 'view-profile',
        component: ViewProfileComponent
      },
      {
        path: 'professional-about-profile',
        component: ProfessionalAboutComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
