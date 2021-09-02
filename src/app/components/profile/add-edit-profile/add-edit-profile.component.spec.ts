import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProfileComponent } from './add-edit-profile.component';

describe('AddEditProfileComponent', () => {
  let component: AddEditProfileComponent;
  let fixture: ComponentFixture<AddEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
