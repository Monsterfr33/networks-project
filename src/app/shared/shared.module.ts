import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [LoaderComponent, SearchBarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
