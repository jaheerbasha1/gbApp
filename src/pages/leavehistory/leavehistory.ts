import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { Leave } from '../../models/leaves';
import { LeaveHistoryService } from '../services/leaveHistory';


@IonicPage()
@Component({
  selector: 'page-leavehistory',
  templateUrl: 'leavehistory.html',
})
export class LeavehistoryPage {
  listItems: Leave[];

  constructor(private nlService: LeaveHistoryService) {
  }

  ionViewWillEnter() {
    this.loadItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavehistoryPage');

  }

  private loadItems(){
    this.listItems = this.nlService.getItems();
    
  }

  getTime(){
    
  }
  

}
