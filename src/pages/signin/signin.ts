import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { NewsPage } from '../news/news';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(public navCtrl:NavController){}


  onLogin(form:NgForm){
console.log(form.value);
this.navCtrl.push(NewsPage);
  }
}
