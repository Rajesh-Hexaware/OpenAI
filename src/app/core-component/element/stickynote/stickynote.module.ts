import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickynoteRoutingModule } from './stickynote-routing.module';
import { StickynoteComponent } from './stickynote.component';


@NgModule({
  declarations: [
    StickynoteComponent
  ],
  imports: [
    CommonModule,
    StickynoteRoutingModule
  ]
})
export class StickynoteModule { }
