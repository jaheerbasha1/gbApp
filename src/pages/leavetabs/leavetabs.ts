import { Component } from '@angular/core';
import { LeavehistoryPage } from '../leavehistory/leavehistory';
import { NewleavePage } from '../newleave/newleave';


@Component({
  selector: 'page-leavetabs',
  templateUrl: 'leavetabs.html',
})
export class LeavetabsPage {
  leaveHistory=LeavehistoryPage;
  createLeave=NewleavePage;
}
