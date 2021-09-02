import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestAndHobbiesRoutingModule } from './interest-and-hobbies-routing.module';
import { InterestAndHobbiesComponent } from './interest-and-hobbies.component';


@NgModule({
  declarations: [InterestAndHobbiesComponent],
  imports: [
    CommonModule,
    InterestAndHobbiesRoutingModule
  ]
})
export class InterestAndHobbiesModule { }
