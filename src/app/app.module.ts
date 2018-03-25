import { PopupService } from './services/popup.service';
import { MainServiceService } from './services/main-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AccountComponent } from './components/account/account.component';
import { StatsComponent } from './components/stats/stats.component';
import { MonthDayComponent } from './components/month-day/month-day.component';
import { DayOptionsComponent } from './components/day-options/day-options.component';

const appRoutes: Routes = [
      { path: '', redirectTo: 'calendar', pathMatch: 'full'},
      { path: 'account', component: AccountComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'stats', component: StatsComponent },

  /*
  { path: 'login', component: LoginComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
  */
];

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    CalendarComponent,
    MessagesComponent,
    AccountComponent,
    StatsComponent,
    MonthDayComponent,
    DayOptionsComponent,
  ],
  entryComponents: [
    DayOptionsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
        useHash: true
      }),
  ],
  providers: [MainServiceService, PopupService, DayOptionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
