import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesreportRoutingModule } from './salesreport-routing.module';
import { SalesreportComponent } from './salesreport.component';


import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SalesreportComponent],
  imports: [
    CommonModule,
    SalesreportRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [SalesreportComponent],
})
export class SalesreportModule {}
