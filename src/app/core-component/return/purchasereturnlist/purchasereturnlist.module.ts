import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasereturnlistRoutingModule } from './purchasereturnlist-routing.module';
import { PurchasereturnlistComponent } from './purchasereturnlist.component';

import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PurchasereturnlistComponent
  ],
  imports: [
    CommonModule,
    PurchasereturnlistRoutingModule,
    sharedModule,
    DatepickerModule,

  ],
  bootstrap: [PurchasereturnlistComponent]
})
export class PurchasereturnlistModule { }
