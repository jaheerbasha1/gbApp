import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';


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
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HTTP) {
  }
  

    /*{ title: 'Annual Leave', name: 'Ahmad Saleh',startDate:'01-12-2018', endDate:'12-12-2018'},
    { title: 'Sick Leave', name: 'Jaheer Basha',startDate:'03-05-2018', endDate:'03-05-2018'}
  ];*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad MgrActionsPage');
    this.http.get('http://192.168.1.150:8090/mgrActions', {}, {})
.then(data => {
  
  console.log(data.status);
  console.log(data.data); // data received by server
  console.log(data.data.title);
  this.items=[{ title:data.data , name: 'Ahmad Saleh',startDate:'01-12-2018', endDate:'12-12-2018'},
  { title: 'Sick Leave', name: 'Jaheer Basha',startDate:'03-05-2018', endDate:'03-05-2018'}];
  console.log(data.headers);
  let response: String = data.data;
  if(response=='true'){
//    this.navCtrl.push(NewsPage);
  }else{
    console.log(data.data); // data received by server
  }
  
})
.catch(error => {

  console.log(error.status);
  console.log(error.error); // error message as string
  console.log(error.headers);

});
  }
//this.authService.login();
//items=[this.datas];

}
