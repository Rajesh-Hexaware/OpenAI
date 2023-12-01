import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent, FormatTimePipe } from './counter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterComponent,
    FormatTimePipe
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule
  ]
})
export class CounterModule { }
