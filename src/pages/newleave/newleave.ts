import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeaveHistoryService } from '../services/leaveHistory';

@Component({
  selector: 'page-newleave',
  templateUrl: 'newleave.html',
})
export class NewleavePage {
  constructor(private nlService:LeaveHistoryService){}

  onAddLeave(form: NgForm){
    this.nlService.newLeave(form.value.type,form.value.startDate,form.value.endDate);
    form.reset();
  }
}
