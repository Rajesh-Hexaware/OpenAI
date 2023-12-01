import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';

import { PurchaselistRoutingModule } from './purchaselist-routing.module';
import { PurchaselistComponent } from './purchaselist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PurchaselistComponent],
  imports: [
    CommonModule,
    PurchaselistRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [PurchaselistComponent],
})
export class PurchaselistModule {}
