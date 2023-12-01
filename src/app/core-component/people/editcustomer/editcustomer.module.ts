import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcustomerRoutingModule } from './editcustomer-routing.module';
import { EditcustomerComponent } from './editcustomer.component';


@NgModule({
  declarations: [
    EditcustomerComponent
  ],
  imports: [
    CommonModule,
    EditcustomerRoutingModule
  ]
})
export class EditcustomerModule { }
