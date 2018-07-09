import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MgrActionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mgr-actions',
  templateUrl: 'mgr-actions.html',
})
export class MgrActionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items = [
    { title: 'Annual Leave', name: 'Ahmad Saleh',startDate:'01-12-2018', endDate:'12-12-2018'},
    { title: 'Sick Leave', name: 'Jaheer Basha',startDate:'03-05-2018', endDate:'03-05-2018'}
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad MgrActionsPage');
  }

}
