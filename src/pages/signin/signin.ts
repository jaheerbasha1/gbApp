import { Component } from '@angular/core';
import { IonicPage, NavController,MenuController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { NewsPage } from '../news/news';
import { AuthService } from '../services/auth';
//import { HTTP } from '@ionic-native/http';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(public navCtrl:NavController,/*private http:HTTP,*/private menuCtrl: MenuController,private authService:AuthService){
    this.menuCtrl.swipeEnable(false);
  }


  onLogin(form:NgForm){

console.log(form.value);


this.authService.login(form.value.empNo,form.value.password);
this.navCtrl.push(NewsPage);//needs to be removed
/*this.http.get('http://192.168.1.150:8090/data/'+form.value.empNo+'/'+form.value.password, {}, {})
.then(data => {
  
  console.log(data.status);
  console.log(data.data); // data received by server
  console.log(data.headers);
  let response: String = data.data;
  if(response=='true'){
    this.navCtrl.push(NewsPage);
  }else{
    console.log(data.data); // data received by server
  }
  
})
.catch(error => {

  console.log(error.status);
  console.log(error.error); // error message as string
  console.log(error.headers);

});*/
  }
    ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }
}
