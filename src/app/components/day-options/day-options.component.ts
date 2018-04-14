import { PopupAddAppointmentComponent } from './../popup-add-appointment/popup-add-appointment.component';
import { PopupService } from './../../services/popup.service';
import { Component, OnInit, HostListener, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-day-options',
  templateUrl: './day-options.component.html',
  styleUrls: ['./day-options.component.scss']
})
export class DayOptionsComponent implements OnInit {
  left;
  top;
  dayNo = this.popupService.day;
  test(test) {
    console.log(test + ' ' + this.dayNo + '-' + this.popupService.month + '-' + this.popupService.year );
  }

  @HostListener('click')
  onClick() {
    this.popupService.deleteOptionComponent();
  }
  constructor( private popupService: PopupService, private containerRef: ViewContainerRef) { }
  showAppointmentPopup() {
    this.popupService.addDynamicPopupComponent(PopupAddAppointmentComponent, this.popupService.parentContainer);
  }

  ngOnInit() {
    this.left = this.popupService.optionsComponentX + 'px';
    this.top = this.popupService.optionsComponentY + 'px';
  }

}
