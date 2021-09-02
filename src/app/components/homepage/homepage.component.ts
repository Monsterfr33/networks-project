import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  fields: any = [];

  constructor() { }

  ngOnInit(): void {
    this.fields =[
      {
        id: 1,
        field: 'Student'
      },
      {
        id: 2,
        field: 'Professional'
      },
      {
        id: 3,
        field: 'Company'
      }
    ]
  }

}
