import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddAppointmentComponent } from './popup-add-appointment.component';

describe('PopupAddAppointmentComponent', () => {
  let component: PopupAddAppointmentComponent;
  let fixture: ComponentFixture<PopupAddAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAddAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
