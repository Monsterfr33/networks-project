import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsCarouselComponent } from './groups-carousel.component';

describe('GroupsCarouselComponent', () => {
  let component: GroupsCarouselComponent;
  let fixture: ComponentFixture<GroupsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
