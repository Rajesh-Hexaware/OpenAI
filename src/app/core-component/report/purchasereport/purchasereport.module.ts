import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasereportRoutingModule } from './purchasereport-routing.module';
import { PurchasereportComponent } from './purchasereport.component';


import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PurchasereportComponent],
  imports: [
    CommonModule,
    PurchasereportRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [PurchasereportComponent],
})
export class PurchasereportModule {}
