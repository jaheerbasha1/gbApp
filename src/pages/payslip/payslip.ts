import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {


  }
  items = [
    { title: 'Apr-2018', basic: '500',Allowance:'200', deductions:'200'},
    { title: 'Mar-2018', basic: '500',Allowance:'200',deductions:'200' },
{ title: 'Feb-2018', basic: '500',Allowance:'200' ,deductions:'200'},
{ title: 'Jan-2018', basic: '500',Allowance:'200' ,deductions:'200'},
{ title: 'Dec-2018', basic: '500',Allowance:'200' ,deductions:'200'},
{ title: 'Nov-2018', basic: '500',Allowance:'200' ,deductions:'200'},
{ title: 'Oct-2018', basic: '500',Allowance:'200' ,deductions:'200'},
{ title: 'Sep-2018', basic: '500',Allowance:'200' ,deductions:'200'},
{ title: 'Aug-2018', basic: '500',Allowance:'200' ,deductions:'200'}
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayslipPage');
  }

}

