import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../../services/loader/loader.service'

@Injectable({
  providedIn: 'root'
})
export class StoreImageService {

  preview: any = "assets/img/img-upload-icon.png";
  percent: number = 0;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  imageUploaded: boolean = false;

  constructor(
    private storage: AngularFireStorage,
    public loader: LoaderService
  ) { }

  uploadFile(event) {
    this.imageUploaded = !this.imageUploaded;
    this.loader.isLoading.next(true);

    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe(res => this.percent = res );

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(res => {
          this.preview = res;
          this.imageUploaded = !this.imageUploaded;
          this.loader.isLoading.next(false);
        });
      })
    )
    .subscribe();
  }

  readURL(event: Event): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];
      const reader = new FileReader();
      reader.onload = e => this.preview = reader.result;
      reader.readAsDataURL(file);
    }
    return this.preview;
  }

  resetPreviewImage() {
    this.preview = "assets/img/img-upload-icon.png";
  }

}
