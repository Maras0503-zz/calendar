import { element, by } from 'protractor';
import { MainServiceService } from './../../services/main-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  icons = [
    { 'icon': 'account_circle',
      'name': 'account'},
    { 'icon': 'perm_contact_calendar',
      'name': 'calendar'},
    { 'icon': 'announcement',
      'name': 'messages'},
    { 'icon': 'assessment',
      'name': 'stats'}
  ];
  active = '';
  setClass(event) {
    this.mainService.setSelectedTab(event.toElement.id);
    this.active = this.mainService.getSelectedTab();
  }

  constructor(private mainService: MainServiceService, private router: Router ) {
    this.router = router;
  }

  ngOnInit() {
      this.active = window.location.pathname.substring(1);
      this.mainService.setSelectedTab(this.router.url.substring(1));
  }
}
