import { MainServiceService } from './../../services/main-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor( private mainService: MainServiceService ) { }
  days = [];
  data = new Date;
  month = this.data.getMonth() + 1;
  year = this.data.getFullYear();
  currentDate = Date.parse(this.month + '-01-' + this.year );
  incMonth() {
    this.month++;
    if (this.month === 13) {
      this.month = 1;
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


  ngOnInit() {
    console.log(Date.now());
    for (let _i = 1; _i < this.getDaysQty(this.month, this.year); _i++) {
      this.days.push(_i + 1);
    }
    console.log('Styczen: ' + this.getDaysQty(1, 2018));
    console.log('Luty (z): ' + this.getDaysQty(2, 2018));
    console.log('Luty (p): ' + this.getDaysQty(2, 2020));
    console.log('Marzec: ' + this.getDaysQty(3, 2018));
    console.log('Kwiecień: ' + this.getDaysQty(4, 2018));
    console.log('Maj: ' + this.getDaysQty(5, 2018));
    console.log('Czerwiec: ' + this.getDaysQty(6, 2018));
    console.log('Lipiec: ' + this.getDaysQty(7, 2018));
    console.log('Sierpien: ' + this.getDaysQty(8, 2018));
    console.log('Wrzesien: ' + this.getDaysQty(9, 2018));
    console.log('Pazdziernik: ' + this.getDaysQty(10, 2018));
    console.log('Listopad: ' + this.getDaysQty(11, 2018));
    console.log('Grudzien: ' + this.getDaysQty(12, 2018));
  }

}
