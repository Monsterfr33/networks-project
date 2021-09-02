import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalAboutComponent } from './professional-about.component';

describe('ProfessionalAboutComponent', () => {
  let component: ProfessionalAboutComponent;
  let fixture: ComponentFixture<ProfessionalAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
