import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistAppoinmentsReviewComponent } from './specialist-appoinments-review.component';

describe('SpecialistAppoinmentsReviewComponent', () => {
  let component: SpecialistAppoinmentsReviewComponent;
  let fixture: ComponentFixture<SpecialistAppoinmentsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistAppoinmentsReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistAppoinmentsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
