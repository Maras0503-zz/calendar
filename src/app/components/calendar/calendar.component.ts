import { PopupService } from './../popup/popup.service';
import { MainServiceService } from './../../services/main-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [PopupService]
})
export class CalendarComponent implements OnInit {

  constructor( private mainService: MainServiceService, private popupService: PopupService ) { }
  days = [];
  data = new Date;
  month = this.data.getMonth() + 1;
  monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  year = this.data.getFullYear();
  currentDate = Date.parse(this.month + '-01-' + this.year );
  incMonth() {
    this.month++;
    if (this.month === 13) {
      this.month = 1;
      this.year++;
    }
    this.currentDate = Date.parse(this.month + '-01-' + this.year );
    this.days = [];
    for (let _i = 1; _i < this.getDaysQty(this.month, this.year); _i++) {
      this.days.push(_i + 1);
    }
  }
  incYear() {
    this.year++;
    this.currentDate = Date.parse(this.month + '-01-' + this.year );
    this.days = [];
    for (let _i = 1; _i < this.getDaysQty(this.month, this.year); _i++) {
      this.days.push(_i + 1);
    }
  }
  decMonth() {
    this.month--;
    if (this.month === 0) {
      this.month = 12;
      this.year--;
    }
    this.currentDate = Date.parse(this.month + '-01-' + this.year );
    this.days = [];
    for (let _i = 1; _i < this.getDaysQty(this.month, this.year); _i++) {
      this.days.push(_i + 1);
    }
  }
  decYear() {
    this.year--;
    this.currentDate = Date.parse(this.month + '-01-' + this.year );
    this.days = [];
    for (let _i = 1; _i < this.getDaysQty(this.month, this.year); _i++) {
      this.days.push(_i + 1);
    }
  }

  getDaysQty(month, year) {
    switch (month) {
      case 1: {
        return 31;
      }
      case 2: {
        if (year % 4 === 0) {
          return 29;
        } else {
          return 28;
        }
      }
      case 3: {
        return 31;
      }
      case 5: {
        return 31;
      }
      case 7: {
        return 31;
      }
      case 8: {
        return 31;
      }
      case 10: {
        return 31;
      }
      case 12: {
        return 31;
      }
      default: {
        return 30;
      }
    }
  }

  showDayOptions(day) {
    console.log(day);
  }

  ngOnInit() {
    console.log(Date.now());
    for (let _i = 1; _i < this.getDaysQty(this.month, this.year); _i++) {
      this.days.push(_i + 1);
    }
  }

}
