import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppoinmentsComponent } from './book-appoinments.component';

describe('BookAppoinmentsComponent', () => {
  let component: BookAppoinmentsComponent;
  let fixture: ComponentFixture<BookAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAppoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
