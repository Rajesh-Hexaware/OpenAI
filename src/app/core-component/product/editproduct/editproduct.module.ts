import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditproductRoutingModule } from './editproduct-routing.module';
import { EditproductComponent } from './editproduct.component';


@NgModule({
  declarations: [
    EditproductComponent
  ],
  imports: [
    CommonModule,
    EditproductRoutingModule
  ]
})
export class EditproductModule { }
