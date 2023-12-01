import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewuserRoutingModule } from './newuser-routing.module';
import { NewuserComponent } from './newuser.component';


@NgModule({
  declarations: [
    NewuserComponent
  ],
  imports: [
    CommonModule,
    NewuserRoutingModule
  ]
})
export class NewuserModule { }
