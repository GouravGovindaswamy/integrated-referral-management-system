import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientRecordsComponent } from './view-patient-records.component';

describe('ViewPatientRecordsComponent', () => {
  let component: ViewPatientRecordsComponent;
  let fixture: ComponentFixture<ViewPatientRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPatientRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
