import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditstateRoutingModule } from './editstate-routing.module';
import { EditstateComponent } from './editstate.component';


@NgModule({
  declarations: [
    EditstateComponent
  ],
  imports: [
    CommonModule,
    EditstateRoutingModule
  ]
})
export class EditstateModule { }
