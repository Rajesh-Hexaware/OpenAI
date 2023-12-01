import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditsupplierRoutingModule } from './editsupplier-routing.module';
import { EditsupplierComponent } from './editsupplier.component';


@NgModule({
  declarations: [
    EditsupplierComponent
  ],
  imports: [
    CommonModule,
    EditsupplierRoutingModule
  ]
})
export class EditsupplierModule { }
