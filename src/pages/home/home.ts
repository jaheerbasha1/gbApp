import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthorizePgPage } from '../authorize-pg/authorize-pg';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {    
  }

  doPrompt() {
this.navCtrl.push(AuthorizePgPage);
  }

}
