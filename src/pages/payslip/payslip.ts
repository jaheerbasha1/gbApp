import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PayslipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payslip',
  templateUrl: 'payslip.html',
})

export class PayslipPage {
  character;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }
  items = [
    { title: 'Race', note: 'Hobbit' },
    { title: 'Culture', note: 'River Folk' },
{ title: 'Alter Ego', note: 'Smeagol' }
];

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayslipPage');
  }

}
