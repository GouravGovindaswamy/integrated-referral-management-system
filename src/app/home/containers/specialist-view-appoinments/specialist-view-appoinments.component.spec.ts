import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistViewAppoinmentsComponent } from './specialist-view-appoinments.component';

describe('SpecialistViewAppoinmentsComponent', () => {
  let component: SpecialistViewAppoinmentsComponent;
  let fixture: ComponentFixture<SpecialistViewAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistViewAppoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistViewAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
