import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateProfileService } from 'src/app/core/http/services/create-profile/create-profile.service';

@Component({
  selector: 'app-interest-and-hobbies',
  templateUrl: './interest-and-hobbies.component.html',
  styleUrls: ['./interest-and-hobbies.component.scss']
})
export class InterestAndHobbiesComponent implements OnInit {

  data: any = [];
  selected: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private createProfileSrv: CreateProfileService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  onSelect(item) {
    if (this.selected.length > 0) {
      this.selected.map((i, index) => {
        if (i._id == item._id) this.selected.splice(index, 1);
        else this.selected.push(item);
      });
    } else {
      this.selected.push(item);
    }
  }

  onNext() {
    this.router.navigate(['/profile/add-edit-profile']);
    this.createProfileSrv.setInfo('interest', this.selected)
  }

  getData() {
    this.http.get(environment.API_BASE_URL + '/interest-hobbies').subscribe(res => {
      this.data = res

      console.log(this.data);
    })
  }

}
