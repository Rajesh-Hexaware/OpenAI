import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetpasswordRoutingModule } from './forgetpassword-routing.module';
import { ForgetpasswordComponent } from './forgetpassword.component';


@NgModule({
  declarations: [
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    ForgetpasswordRoutingModule
  ]
})
export class ForgetpasswordModule { }
