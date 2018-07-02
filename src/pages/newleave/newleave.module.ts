import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewleavePage } from './newleave';

@NgModule({
  declarations: [
    NewleavePage,
  ],
  imports: [
    IonicPageModule.forChild(NewleavePage),
  ],
})
export class NewleavePageModule {}
