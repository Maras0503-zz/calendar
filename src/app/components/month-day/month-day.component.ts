import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-month-day',
  templateUrl: './month-day.component.html',
  styleUrls: ['./month-day.component.scss']
})
export class MonthDayComponent implements OnInit {
  constructor() { }
  @Input()
  dayNo;
  ngOnInit() {
  }

}
