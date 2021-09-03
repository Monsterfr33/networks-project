import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-profile',
  templateUrl: './add-edit-profile.component.html',
  styleUrls: ['./add-edit-profile.component.scss']
})
export class AddEditProfileComponent implements OnInit {

  selected: any = [];
  users: any = [];
  programForm: any = FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.selected = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.formInit();

    this.users = [
      {
        id: 1,
        image: "https://blog.hootsuite.com/wp-content/uploads/2020/05/how-to-use-facebook-groups.jpg",
        name: "UWI Students Union"
      },
      {
        id: 2,
        image: "https://2c6disor5j62kph211fg7v42-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Bartyed-group-tutoring-800x600-1.jpg",
        name: "UWI Carnival Commitee"
      },
      {
        id: 3,
        image: "https://i.pinimg.com/originals/1c/44/e4/1c44e4f394c9594f9bf6452020a64b65.jpg",
        name: "Gaming Thunders"
      },
      {
        id: 4,
        image: "https://pubmatic.com/wp-content/uploads/2018/12/BLOG-ASSETS-In-App-Monetization-Partner-750x417.jpg",
        name: "Development Hard"
      },
      {
        id: 5,
        image: "https://blog.hootsuite.com/wp-content/uploads/2020/05/how-to-use-facebook-groups.jpg",
        name: "UWI Students Union"
      },
      {
        id: 6,
        image: "https://2c6disor5j62kph211fg7v42-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Bartyed-group-tutoring-800x600-1.jpg",
        name: "UWI Carnival Commitee"
      },
      {
        id: 7,
        image: "https://i.pinimg.com/originals/1c/44/e4/1c44e4f394c9594f9bf6452020a64b65.jpg",
        name: "Gaming Thunders"
      },
    ]
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getOnItemClick(event) {
    if(event == true) {
      this.router.navigateByUrl('profile/view-profile');
    }
  }

}
