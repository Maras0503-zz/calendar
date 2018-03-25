import { PopupService } from './../../services/popup.service';
import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-day-options',
  templateUrl: './day-options.component.html',
  styleUrls: ['./day-options.component.scss']
})
export class DayOptionsComponent implements OnInit {
  left;
  top;
  dayNo = this.popupService.parameter;
  test(test) {
    console.log(test + ' ' + this.dayNo + '-' + this.popupService.month + '-' + this.popupService.year );
  }

  @HostListener('click')
  onClick() {
    this.popupService.deleteComponent();
  }
  constructor(private popupService: PopupService) { }

  ngOnInit() {
    this.left = this.popupService.screenX + 'px';
    this.top = this.popupService.screenY + 'px';
  }

}
