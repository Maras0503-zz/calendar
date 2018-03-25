import { DayOptionsComponent } from './../day-options/day-options.component';
import { Component, OnInit, Input, HostListener, ViewContainerRef } from '@angular/core';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-month-day',
  templateUrl: './month-day.component.html',
  styleUrls: ['./month-day.component.scss']
})
export class MonthDayComponent implements OnInit {
  constructor(private popupService: PopupService, private containerRef: ViewContainerRef) { }
  @Input()
  dayNo;
  @HostListener('click', ['$event'])
  onClick(event) {
    const target = event;
    this.popupService.parameter = this.dayNo;
    if ( window.screen.width - target.x < 350 ) {
      this.popupService.screenX = target.layerX - 300;
      this.popupService.screenY = target.layerY;
    } else {
      this.popupService.screenX = target.layerX;
      this.popupService.screenY = target.layerY;
    }
    this.popupService.setContainerRef(this.containerRef);
    this.popupService.setPopupRef(DayOptionsComponent);
    this.popupService.addDynamicComponent();
  }
  ngOnInit() {
  }

}
