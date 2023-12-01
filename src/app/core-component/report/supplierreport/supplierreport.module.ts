import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierreportRoutingModule } from './supplierreport-routing.module';
import { SupplierreportComponent } from './supplierreport.component';

import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SupplierreportComponent],
  imports: [
    CommonModule,
    SupplierreportRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
  bootstrap: [SupplierreportComponent],
})
export class SupplierreportModule {}
