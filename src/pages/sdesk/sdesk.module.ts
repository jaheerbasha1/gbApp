import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SdeskPage } from './sdesk';

@NgModule({
  declarations: [
    SdeskPage,
  ],
  imports: [
    IonicPageModule.forChild(SdeskPage),
  ],
})
export class SdeskPageModule {}
