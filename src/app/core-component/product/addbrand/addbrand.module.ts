import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbrandRoutingModule } from './addbrand-routing.module';
import { AddbrandComponent } from './addbrand.component';


@NgModule({
  declarations: [
    AddbrandComponent
  ],
  imports: [
    CommonModule,
    AddbrandRoutingModule
  ]
})
export class AddbrandModule { }
