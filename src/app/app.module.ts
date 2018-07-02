import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { MgrssPage } from '../pages/mgrss/mgrss';
import { EmpssPage } from '../pages/empss/empss';
import { LeavehistoryPage } from '../pages/leavehistory/leavehistory';
import { NewleavePage } from '../pages/newleave/newleave';
import { LeavetabsPage } from '../pages/leavetabs/leavetabs';
import { LeaveHistoryService } from '../pages/services/leaveHistory';


@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    MgrssPage,
    EmpssPage,
    LeavehistoryPage,
    NewleavePage,
    LeavetabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    MgrssPage,
    EmpssPage,
    LeavehistoryPage,
    NewleavePage,
    LeavetabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeaveHistoryService
  ]
})
export class AppModule {}
