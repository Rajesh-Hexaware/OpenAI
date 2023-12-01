import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollbarRoutingModule } from './scrollbar-routing.module';
import { ScrollbarComponent } from './scrollbar.component';
import { sharedModule } from 'src/app/shared/shared.module';
;


@NgModule({
  declarations: [
    ScrollbarComponent
  ],
  imports: [
    CommonModule,
    ScrollbarRoutingModule,
    sharedModule,

  ]
})
export class ScrollbarModule { }
