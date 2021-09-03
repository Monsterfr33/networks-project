import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  educations: any = [];
  experiences: any = [];
  certifications: any = [];
  projects: any = [];

  constructor() { }

  ngOnInit(): void {
    this.educations = [
      {
        id: 1,
        image: 'assets/img/view1.png',
        university: 'Iqra University',
        degree: 'BSCS',
        date: '10-04-2017 - 25-07-2021',
      },
      {
        id: 2,
        image: 'assets/img/view2.png',
        university: 'Stanford University',
        degree: 'BBA',
        date: '10-04-2017 - 25-07-2021',
      },
      {
        id: 3,
        image: 'assets/img/view3.jpg',
        university: 'Harvard University',
        degree: 'CSS',
        date: '10-04-2017 - 25-07-2021',
      },
      {
        id: 4,
        image: 'assets/img/view4.png',
        university: 'Yale University',
        degree: 'ACCA',
        date: '10-04-2017 - 25-07-2021',
      },
    ],

    this.experiences = [
      {
        id: 1,
        image: 'assets/img/view5.png',
        stack: 'Full Stack Developer',
        office: 'Contour Software Pvt. Ltd',
        date: '10-04-2017 - 25-07-2021',
      },
      {
        id: 2,
        image: 'assets/img/view8.png',
        stack: 'UI/UX Developer',
        office: 'TECH SOLUTION',
        date: '10-04-2017 - 25-07-2021',
      },
      {
        id: 3,
        image: 'assets/img/view7.png',
        stack: 'Backend Developer',
        office: 'VICTORIA SOLUTION',
        date: '10-04-2017 - 25-07-2021',
      },
      {
        id: 4,
        image: 'assets/img/view6.png',
        stack: 'UI/UX Developer',
        office: 'Intellexal Solutions',
        date: '10-04-2017 - 25-07-2021',
      },
    ],

    this.certifications = [
      {
        id: 1,
        image: 'assets/img/view9.png',
        name: 'Auth0 Ambassador',
        company: 'Auth0',
        date: '10-04-2017',
      },
      {
        id: 2,
        image: 'assets/img/view10.png',
        name: '10 days of JS',
        company: 'Hacker Rank',
        date: '20-07-2018',
      },
      {
        id: 3,
        image: 'assets/img/view11.png',
        name: 'Hacktoberfest 2020',
        company: 'Digital Ocean',
        date: '25-07-2020',
      },
      {
        id: 4,
        image: 'assets/img/view12.jpg',
        name: 'AWS DevAx Mentor',
        company: 'Amazon Web Services',
        date: '20-03-2021',
      }
    ],

    this.projects = [
      {
        id: 1,
        image: 'assets/img/view14.webp',
        name: 'Zkteco App',
        company: 'Thrashtech Solutions',
        stack: 'UI/UX | Frontend',
      },
      {
        id: 2,
        image: 'assets/img/view15.png',
        name: 'Jubilee General',
        company: 'Live Wire Labs',
        stack: 'React | NodeJS',
      },
      {
        id: 3,
        image: 'assets/img/view13.png',
        name: 'Lux Research',
        company: 'Creative Chaos',
        stack: 'UI/UX | Frontend',
      },
      {
        id: 4,
        image: 'assets/img/view16.png',
        name: 'Njiani Pro',
        company: 'Go Live',
        stack: 'Angular | Capacitor',
      }
    ]
  }

}
