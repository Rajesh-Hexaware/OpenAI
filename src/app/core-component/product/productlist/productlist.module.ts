import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ProductlistComponent } from './productlist.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductlistComponent],
  imports: [CommonModule, ProductlistRoutingModule, sharedModule],
})
export class ProductlistModule {}
