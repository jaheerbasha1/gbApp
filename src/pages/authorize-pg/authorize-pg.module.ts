import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorizePgPage } from './authorize-pg';

@NgModule({
  declarations: [
    AuthorizePgPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorizePgPage),
  ],
})
export class AuthorizePgPageModule {}
