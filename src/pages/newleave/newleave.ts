import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeaveHistoryService } from '../services/leaveHistory';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-newleave',
  templateUrl: 'newleave.html',
})
export class NewleavePage {
  constructor(private nlService:LeaveHistoryService
    ,public alertCtrl: AlertController){}

  onAddLeave(form: NgForm){
    
    var dt1 = new Date(form.value.startDate);
    var dt2 = new Date(form.value.endDate);
    var duration =Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24))+1;
    console.log('Balance deduction '+duration);
    if (duration<0){
      this.showAlert();  
    }else {
      this.nlService.newLeave(form.value.type,form.value.startDate,form.value.endDate,duration);
      form.reset();    
    }
    
  }

showAlert(){
  const alert =this.alertCtrl.create({
    title:'Leave Alert',
    subTitle:'leave end date is less than leave start date!',
    buttons:['OK']
  });
  alert.present();
}
}
