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

  constructor(private mainService: MainServiceService) {
  }

  ngOnInit() {
  }
}
