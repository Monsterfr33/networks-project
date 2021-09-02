import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { GroupsCarouselComponent } from './groups-carousel/groups-carousel.component';

@NgModule({
  declarations: [
    LoaderComponent,
    SearchBarComponent,
    ImageUploaderComponent,
    GroupsCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    SearchBarComponent,
    ImageUploaderComponent,
    GroupsCarouselComponent
  ]
})
export class SharedModule { }
