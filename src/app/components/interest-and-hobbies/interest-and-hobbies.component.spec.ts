import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestAndHobbiesComponent } from './interest-and-hobbies.component';

describe('InterestAndHobbiesComponent', () => {
  let component: InterestAndHobbiesComponent;
  let fixture: ComponentFixture<InterestAndHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestAndHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestAndHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
