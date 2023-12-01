import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewstateRoutingModule } from './newstate-routing.module';
import { NewstateComponent } from './newstate.component';


@NgModule({
  declarations: [
    NewstateComponent
  ],
  imports: [
    CommonModule,
    NewstateRoutingModule
  ]
})
export class NewstateModule { }
