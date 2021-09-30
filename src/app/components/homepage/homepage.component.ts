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
        field: 'Student',
        popupTypo: "Connect to the world of professional interest as creation of a student networks circle in landing dream career."
      },
      {
        id: 2,
        field: 'Professional',
        popupTypo: "Connect to the world of professional interest as creation of a personal networks circle in landing dream career."
      },
      {
        id: 3,
        field: 'Company',
        popupTypo: "Connect to the world of professional interest as creation of a company networks circle in landing dream career."
      }
    ]
  }

}
