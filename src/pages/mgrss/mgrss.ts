import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
}

}
