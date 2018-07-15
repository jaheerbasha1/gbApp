import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IachatPage } from './iachat';

@NgModule({
  declarations: [
    IachatPage,
  ],
  imports: [
    IonicPageModule.forChild(IachatPage),
  ],
})
export class IachatPageModule {}
