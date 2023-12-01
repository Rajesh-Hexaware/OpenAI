import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';
import { NgxbootstrapModule } from 'src/app/shared/ngx-bootstrap/ngxbootstrap.module';



@NgModule({
  declarations: [
    TooltipComponent
  ],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    NgxbootstrapModule
  ]
})
export class TooltipModule { }
