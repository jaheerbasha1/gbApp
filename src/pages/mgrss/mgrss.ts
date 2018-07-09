import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MgrActionsPage } from '../mgr-actions/mgr-actions';

/**
 * Generated class for the MgrssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mgrss',
  templateUrl: 'mgrss.html',
})
export class MgrssPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MgrssPage');
  }
  items = [
    'Subordinats stats',
    'Pending Actions',
    'Delegation of Authority'
];
itemSelected(item: string) {
  console.log("Selected Item", item);
  let selc: String = item;
  if(selc=='Pending Actions'){
    console.log("inside payslip");
    this.navCtrl.push(MgrActionsPage);
  }
  /*if(selc=='Time Attendance'){
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
  }*/
}

}
