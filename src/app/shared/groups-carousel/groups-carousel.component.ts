import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-groups-carousel',
  templateUrl: './groups-carousel.component.html',
  styleUrls: ['./groups-carousel.component.scss']
})
export class GroupsCarouselComponent implements OnInit {

  @Input('data') data: any = [];
  @Output() itemClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(item) {
    this.itemClick.emit(item);
  }

}
