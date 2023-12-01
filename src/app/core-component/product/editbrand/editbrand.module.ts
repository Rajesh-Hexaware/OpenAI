import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditbrandRoutingModule } from './editbrand-routing.module';
import { EditbrandComponent } from './editbrand.component';


@NgModule({
  declarations: [
    EditbrandComponent
  ],
  imports: [
    CommonModule,
    EditbrandRoutingModule
  ]
})
export class EditbrandModule { }
