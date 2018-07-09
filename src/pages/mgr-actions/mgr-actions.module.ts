import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgrActionsPage } from './mgr-actions';

@NgModule({
  declarations: [
    MgrActionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MgrActionsPage),
  ],
})
export class MgrActionsPageModule {}
