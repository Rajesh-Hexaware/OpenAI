import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcustomerRoutingModule } from './addcustomer-routing.module';
import { AddcustomerComponent } from './addcustomer.component';


@NgModule({
  declarations: [
    AddcustomerComponent
  ],
  imports: [
    CommonModule,
    AddcustomerRoutingModule
  ]
})
export class AddcustomerModule { }
