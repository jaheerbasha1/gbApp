import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MgrActionsPage } from '../mgr-actions/mgr-actions';
import { ReportelistPage } from '../reportelist/reportelist';

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
    'My Subordinates',
    'Pending Actions',
    'Delegation of Authority'
];
itemSelected(item: string) {
  console.log("Selected Item", item);
  let selc: String = item;
  if(selc=='Pending Actions'){
    console.log("inside Pending Actions");
    this.navCtrl.push(MgrActionsPage);
  }
  if(selc=='My Subordinates'){
    console.log("inside My Subordinates");
    this.navCtrl.push(ReportelistPage);    
  }
  /*if(selc=='Apply Leave'){
    console.log("inside leave");
    this.navCtrl.push(LeavetabsPage);    
  }
  if(selc=='Code of Ethics'){
    console.log("inside coe");
    this.navCtrl.push(CoePage);    
  }*/
}

}
