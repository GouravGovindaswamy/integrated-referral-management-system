import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAppoinmentsComponent } from './admin-view-appoinments.component';

describe('AdminViewAppoinmentsComponent', () => {
  let component: AdminViewAppoinmentsComponent;
  let fixture: ComponentFixture<AdminViewAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAppoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
