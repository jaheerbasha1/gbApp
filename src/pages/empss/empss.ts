import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeavetabsPage } from '../leavetabs/leavetabs';
import { PayslipPage } from '../payslip/payslip';
import { TaPage } from '../ta/ta';
import { CoePage } from '../coe/coe';

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
  let selc: String = item;
  if(selc=='View Payslip'){
    console.log("inside payslip");
    this.navCtrl.push(PayslipPage);
  }
  if(selc=='Time Attendance'){
    console.log("inside ta");
    this.navCtrl.push(TaPage);    
  }
  if(selc=='Apply Leave'){
    console.log("inside leave");
    this.navCtrl.push(LeavetabsPage);    
  }
  if(selc=='Code of Ethics'){
    console.log("inside coe");
    this.navCtrl.push(CoePage);    
  }
  }
}
