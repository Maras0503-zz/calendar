import { MainServiceService } from './../../services/main-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private mainService: MainServiceService) { }
  month = 1;

  currentDate = Date.parse('01-01-2016');
  ngOnInit() {
  }

}
