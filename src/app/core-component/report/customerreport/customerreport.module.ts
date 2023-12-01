import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerreportRoutingModule } from './customerreport-routing.module';
import { CustomerreportComponent } from './customerreport.component';


import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CustomerreportComponent
  ],
  imports: [
    CommonModule,
    CustomerreportRoutingModule,
    sharedModule,
    DatepickerModule
  ],
 bootstrap: [CustomerreportComponent]
})
export class CustomerreportModule { }
