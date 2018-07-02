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
    this.nlService.newLeave(form.value.type,form.value.startDate,form.value.endDate);
    this.showAlert();
    form.reset();    
  }

showAlert(){
  const alert =this.alertCtrl.create({
    title:'Leave Alert',
    subTitle:'Leave Request Has been submitted for approval!',
    buttons:['OK']
  });
  alert.present();
}
}
