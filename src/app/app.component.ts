import { DayOptionsComponent } from './components/day-options/day-options.component';
import { PopupService } from './services/popup.service';
import { MainServiceService } from './services/main-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private mainService: MainServiceService, private popupService: PopupService) {
  }
}
