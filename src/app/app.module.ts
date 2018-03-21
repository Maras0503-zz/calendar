import { MainServiceService } from './services/main-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AccountComponent } from './components/account/account.component';
import { StatsComponent } from './components/stats/stats.component';
@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    CalendarComponent,
    MessagesComponent,
    AccountComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'stats',
        component: StatsComponent
      }
    ])
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
