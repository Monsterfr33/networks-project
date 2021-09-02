import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { InterestAndHobbiesRoutingModule } from './interest-and-hobbies-routing.module';
import { InterestAndHobbiesComponent } from './interest-and-hobbies.component';


@NgModule({
  declarations: [InterestAndHobbiesComponent],
  imports: [
    CommonModule,
    InterestAndHobbiesRoutingModule,
    SharedModule
  ]
})
export class InterestAndHobbiesModule { }
