import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangesliderRoutingModule } from './rangeslider-routing.module';
import { RangesliderComponent } from './rangeslider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    RangesliderComponent
  ],
  imports: [
    CommonModule,
    RangesliderRoutingModule,
    NgxSliderModule
  ]
})
export class RangesliderModule { }
