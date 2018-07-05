import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoePage } from './coe';

@NgModule({
  declarations: [
    CoePage,
  ],
  imports: [
    IonicPageModule.forChild(CoePage),
  ],
})
export class CoePageModule {}
