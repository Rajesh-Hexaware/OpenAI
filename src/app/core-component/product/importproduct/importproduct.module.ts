import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportproductRoutingModule } from './importproduct-routing.module';
import { ImportproductComponent } from './importproduct.component';


@NgModule({
  declarations: [
    ImportproductComponent
  ],
  imports: [
    CommonModule,
    ImportproductRoutingModule
  ]
})
export class ImportproductModule { }
