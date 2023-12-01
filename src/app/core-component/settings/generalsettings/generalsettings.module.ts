import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralsettingsRoutingModule } from './generalsettings-routing.module';
import { GeneralsettingsComponent } from './generalsettings.component';


@NgModule({
  declarations: [
    GeneralsettingsComponent
  ],
  imports: [
    CommonModule,
    GeneralsettingsRoutingModule
  ]
})
export class GeneralsettingsModule { }
