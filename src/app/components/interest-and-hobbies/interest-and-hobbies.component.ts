import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-and-hobbies',
  templateUrl: './interest-and-hobbies.component.html',
  styleUrls: ['./interest-and-hobbies.component.scss']
})
export class InterestAndHobbiesComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {

    this.data = [
      {
        id: 1,
        name: 'Health Physician'
      },
      {
        id: 2,
        name: 'Engineer'
      },
      {
        id: 3,
        name: 'Educational'
      },
      {
        id: 4,
        name: 'Technician'
      },
      {
        id: 5,
        name: 'Law'
      },
      {
        id: 6,
        name: 'Architect'
      },
      {
        id: 7,
        name: 'Agriculture'
      },
      {
        id: 8,
        name: 'Construction'
      },
      {
        id: 9,
        name: 'Manufacturing'
      },
      {
        id: 10,
        name: 'Computer Science'
      },
      {
        id: 11,
        name: 'Wholesale Trade'
      },
      {
        id: 12,
        name: 'Finance'
      },
      {
        id: 13,
        name: 'Social Services'
      },
      {
        id: 14,
        name: 'Arts and Entertainment'
      },
      {
        id: 15,
        name: 'Accomadations'
      },
      {
        id: 16,
        name: 'Food Services'
      },
      {
        id: 17,
        name: 'Automotive'
      },
      {
        id: 18,
        name: 'Legislators'
      },
      {
        id: 19,
        name: 'Transportation'
      },
      {
        id: 20,
        name: 'Government'
      },
      {
        id: 21,
        name: 'Real Estate'
      },
      {
        id: 22,
        name: 'Security'
      },
      {
        id: 23,
        name: 'Publisher'
      },
      {
        id: 24,
        name: 'Fire Department'
      },
      {
        id: 25,
        name: 'Funeral Home'
      }
    ]
  }

}
