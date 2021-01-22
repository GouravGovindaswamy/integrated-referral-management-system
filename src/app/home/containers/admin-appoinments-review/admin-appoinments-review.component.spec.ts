import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppoinmentsReviewComponent } from './admin-appoinments-review.component';

describe('AdminAppoinmentsReviewComponent', () => {
  let component: AdminAppoinmentsReviewComponent;
  let fixture: ComponentFixture<AdminAppoinmentsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppoinmentsReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAppoinmentsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
