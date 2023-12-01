import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierlistRoutingModule } from './supplierlist-routing.module';
import { SupplierlistComponent } from './supplierlist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SupplierlistComponent],
  imports: [CommonModule, SupplierlistRoutingModule, sharedModule],
})
export class SupplierlistModule {}
