import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseorderreportRoutingModule } from './purchaseorderreport-routing.module';
import { PurchaseorderreportComponent } from './purchaseorderreport.component';


import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PurchaseorderreportComponent],
  imports: [
    CommonModule,
    PurchaseorderreportRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [PurchaseorderreportComponent],
})
export class PurchaseorderreportModule {}
