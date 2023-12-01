import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsupplierRoutingModule } from './addsupplier-routing.module';
import { AddsupplierComponent } from './addsupplier.component';


@NgModule({
  declarations: [
    AddsupplierComponent
  ],
  imports: [
    CommonModule,
    AddsupplierRoutingModule
  ]
})
export class AddsupplierModule { }
