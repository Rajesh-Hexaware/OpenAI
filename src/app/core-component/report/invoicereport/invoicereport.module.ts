import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicereportRoutingModule } from './invoicereport-routing.module';
import { InvoicereportComponent } from './invoicereport.component';


import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InvoicereportComponent],
  imports: [
    CommonModule,
    InvoicereportRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [InvoicereportComponent],
})
export class InvoicereportModule {}
