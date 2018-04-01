import { MatInputModule, MatSelectModule } from '@angular/material';
import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-popup-add-appointment',
  templateUrl: './popup-add-appointment.component.html',
  styleUrls: ['./popup-add-appointment.component.scss']
})

export class PopupAddAppointmentComponent implements OnInit {
  left = 50 + '%';
  top = 20 + '%';
  hourInput: any = 12;
  minutesInput: any = 30;
  constructor() { }
  options = [
    { 'name': 'Whole day',
      'value': false},
    { 'name': 'Specific hour',
      'value': true}
  ];
  period;
  name;
  hour = 12;
  minutes = 0;
  periodClick(period) {
    this.period = period;
  }
  onKeyDescription(event: any) {
    this.name = event.target.value;
  }
  setHours() {
    if (this.hourInput > 23 || this.hourInput == null) {
      this.hourInput = 23;
    }
    if (this.hourInput < 0) {
      this.hourInput = 0;
    }
  }
  setMinutes(event: any) {
    if (this.minutesInput > 59 || this.hourInput == null) {
      this.minutesInput = 59;
    }
    if (this.minutesInput < 0) {
      this.minutesInput = 0;
    }
  }
  ngOnInit() {
  }

}
