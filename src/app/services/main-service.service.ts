import { Injectable } from '@angular/core';

@Injectable()
export class MainServiceService {

  constructor() { }
  selectedTab = '';
  setSelectedTab(name) {
    this.selectedTab = name;
  }
  getSelectedTab() {
    return this.selectedTab;
  }
}
