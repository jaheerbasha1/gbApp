import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaPage } from './ta';

@NgModule({
  declarations: [
    TaPage,
  ],
  imports: [
    IonicPageModule.forChild(TaPage),
  ],
})
export class TaPageModule {}
