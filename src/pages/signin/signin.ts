import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { NewsPage } from '../news/news';
//import { AuthService } from '../services/auth';
//import { HTTP } from '@ionic-native/http';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(public navCtrl:NavController,/*private http:HTTP,private authService:AuthService*/){}


  onLogin(form:NgForm){
console.log(form.value);
this.navCtrl.push(NewsPage);
//this.authService.login();
/*this.http.get('http://localhost:8090/data/', {}, {})
.then(data => {

  console.log(data.status);
  console.log(data.data); // data received by server
  console.log(data.headers);

})
.catch(error => {

  console.log(error.status);
  console.log(error.error); // error message as string
  console.log(error.headers);

});*/
//console.log(this.http.getBasicAuthHeader('800777','Amsgul@837'));
  }
}
