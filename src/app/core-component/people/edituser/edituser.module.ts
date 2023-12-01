import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdituserRoutingModule } from './edituser-routing.module';
import { EdituserComponent } from './edituser.component';


@NgModule({
  declarations: [
    EdituserComponent
  ],
  imports: [
    CommonModule,
    EdituserRoutingModule
  ]
})
export class EdituserModule { }
