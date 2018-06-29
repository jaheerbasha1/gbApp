import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmpssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empss',
  templateUrl: 'empss.html',
})
export class EmpssPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpssPage');
  }
  items = [
    'View Payslip',
    'Apply Leave',
    'Time Attendance',
    'Code of Ethics',
];
itemSelected(item: string) {
  console.log("Selected Item", item);
}
}
