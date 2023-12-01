import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImporttransferRoutingModule } from './importtransfer-routing.module';
import { ImporttransferComponent } from './importtransfer.component';


@NgModule({
  declarations: [
    ImporttransferComponent
  ],
  imports: [
    CommonModule,
    ImporttransferRoutingModule
  ]
})
export class ImporttransferModule { }
