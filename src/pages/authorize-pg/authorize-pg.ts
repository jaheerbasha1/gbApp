import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-authorize-pg',
  templateUrl: 'authorize-pg.html',
})
export class AuthorizePgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorizePgPage');
  }

  GoToNews(){
    this.navCtrl.push(MenuPage);
  }

}
