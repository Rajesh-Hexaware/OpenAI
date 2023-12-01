import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductDetailsRoutingModule, sharedModule],
})
export class ProductDetailsModule {}
