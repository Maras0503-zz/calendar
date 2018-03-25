import { element, by } from 'protractor';
import { MainServiceService } from './../../services/main-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

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
  value;
  setClass(event) {
    const target = event.target || event.srcElement || event.originalTarget;
    this.mainService.setSelectedTab(target.id);
    this.active = this.mainService.getSelectedTab();
  }

  constructor(private mainService: MainServiceService, private router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.active = window.location.hash.substring(2);
    this.mainService.setSelectedTab(window.location.hash.substring(2));
  }
}
