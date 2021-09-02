import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestAndHobbiesComponent } from './interest-and-hobbies.component';

const routes: Routes = [
  { path: '', component: InterestAndHobbiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestAndHobbiesRoutingModule { }
