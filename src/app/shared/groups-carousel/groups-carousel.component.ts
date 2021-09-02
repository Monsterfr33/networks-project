import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-carousel',
  templateUrl: './groups-carousel.component.html',
  styleUrls: ['./groups-carousel.component.scss']
})
export class GroupsCarouselComponent implements OnInit {

  groups: any = [
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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
