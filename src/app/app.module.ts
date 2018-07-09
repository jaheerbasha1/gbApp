import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { NewsPage } from '../pages/news/news';
import { MgrssPage } from '../pages/mgrss/mgrss';
import { EmpssPage } from '../pages/empss/empss';
import { LeavehistoryPage } from '../pages/leavehistory/leavehistory';
import { NewleavePage } from '../pages/newleave/newleave';
import { LeavetabsPage } from '../pages/leavetabs/leavetabs';
import { LeaveHistoryService } from '../pages/services/leaveHistory';
import { SigninPage } from '../pages/signin/signin';
import { AuthService } from '../pages/services/auth';
import { TaPage } from '../pages/ta/ta';
import { PayslipPage } from '../pages/payslip/payslip';
import { CoePage } from '../pages/coe/coe';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    MgrssPage,
    EmpssPage,
    LeavehistoryPage,
    NewleavePage,
    LeavetabsPage,
    SigninPage,
    TaPage,
    PayslipPage,
    CoePage  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    MgrssPage,
    EmpssPage,
    LeavehistoryPage,
    NewleavePage,
    LeavetabsPage,
    SigninPage,
    TaPage,
    PayslipPage,
    CoePage  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeaveHistoryService,HTTP,AuthService
  ]
})
export class AppModule {}
