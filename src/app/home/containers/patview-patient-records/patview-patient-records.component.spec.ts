import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatviewPatientRecordsComponent } from './patview-patient-records.component';

describe('PatviewPatientRecordsComponent', () => {
  let component: PatviewPatientRecordsComponent;
  let fixture: ComponentFixture<PatviewPatientRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatviewPatientRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatviewPatientRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
