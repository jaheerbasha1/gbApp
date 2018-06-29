import { Component } from '@angular/core';
import { IonicPage, } from 'ionic-angular';
import { EmpssPage } from '../empss/empss';
import { MgrssPage } from '../mgrss/mgrss';
import { NewsPage } from '../news/news';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  template: `
  <ion-tabs color = 'gbred'>
  <ion-tab [root]="newsPage" tabIcon="information"></ion-tab>
  <ion-tab [root]="empssPage" tabIcon="person"></ion-tab>
  <ion-tab [root]="mgrssPage" tabIcon="people"></ion-tab>
  </ion-tabs>
  `
})
export class MenuPage {

  empssPage=EmpssPage;
  mgrssPage=MgrssPage;
  newsPage=NewsPage;

}
