import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcountryRoutingModule } from './editcountry-routing.module';
import { EditcountryComponent } from './editcountry.component';


@NgModule({
  declarations: [
    EditcountryComponent
  ],
  imports: [
    CommonModule,
    EditcountryRoutingModule
  ]
})
export class EditcountryModule { }
