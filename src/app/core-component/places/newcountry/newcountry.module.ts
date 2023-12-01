import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewcountryRoutingModule } from './newcountry-routing.module';
import { NewcountryComponent } from './newcountry.component';


@NgModule({
  declarations: [
    NewcountryComponent
  ],
  imports: [
    CommonModule,
    NewcountryRoutingModule
  ]
})
export class NewcountryModule { }
