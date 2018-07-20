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
import { MgrActionsPage } from '../pages/mgr-actions/mgr-actions';
import { IachatPage } from '../pages/iachat/iachat';
import { ReportelistPage } from '../pages/reportelist/reportelist';
import { OffersPage } from '../pages/offers/offers';
import { ChartsModule } from 'ng2-charts';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { SettingsPage } from '../pages/settings/settings';


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
    CoePage,
    MgrActionsPage,
    IachatPage,
    ReportelistPage,
    OffersPage,
    AnalyticsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ChartsModule
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
    CoePage,
    MgrActionsPage, IachatPage,
    ReportelistPage,
    OffersPage,
    AnalyticsPage,
  SettingsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LeaveHistoryService, HTTP, AuthService
  ]
})
export class AppModule { }
