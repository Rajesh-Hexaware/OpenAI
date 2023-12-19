import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ProductlistComponent } from './productlist.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductlistComponent],
  imports: [CommonModule, ProductlistRoutingModule, sharedModule,ReactiveFormsModule],
})
export class ProductlistModule {}
