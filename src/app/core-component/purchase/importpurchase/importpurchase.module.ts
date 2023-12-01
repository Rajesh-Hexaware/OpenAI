import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportpurchaseRoutingModule } from './importpurchase-routing.module';
import { ImportpurchaseComponent } from './importpurchase.component';


@NgModule({
  declarations: [
    ImportpurchaseComponent
  ],
  imports: [
    CommonModule,
    ImportpurchaseRoutingModule
  ]
})
export class ImportpurchaseModule { }
