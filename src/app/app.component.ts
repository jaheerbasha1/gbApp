import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LeavetabsPage } from '../pages/leavetabs/leavetabs';
import { MgrssPage } from '../pages/mgrss/mgrss';
import { EmpssPage } from '../pages/empss/empss';
import { NewsPage } from '../pages/news/news';
import { SigninPage } from '../pages/signin/signin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  leavetabsPage = LeavetabsPage;
  mgrssPage=MgrssPage;
  empssPage=EmpssPage;
  newsPage=NewsPage;
  signinPage=SigninPage;
  @ViewChild('nav') nav:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

