import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewusereditRoutingModule } from './newuseredit-routing.module';
import { NewusereditComponent } from './newuseredit.component';


@NgModule({
  declarations: [
    NewusereditComponent
  ],
  imports: [
    CommonModule,
    NewusereditRoutingModule
  ]
})
export class NewusereditModule { }
