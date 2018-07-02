import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeavetabsPage } from './leavetabs';

@NgModule({
  declarations: [
    LeavetabsPage,
  ],
  imports: [
    IonicPageModule.forChild(LeavetabsPage),
  ],
})
export class LeavetabsPageModule {}
