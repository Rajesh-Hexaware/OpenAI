import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryreportRoutingModule } from './inventoryreport-routing.module';
import { InventoryreportComponent } from './inventoryreport.component';


import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InventoryreportComponent],
  imports: [
    CommonModule,
    InventoryreportRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [InventoryreportComponent],
})
export class InventoryreportModule {}
