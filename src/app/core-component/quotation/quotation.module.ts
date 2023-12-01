import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationComponent } from './quotation.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [QuotationComponent],
  imports: [CommonModule, QuotationRoutingModule, sharedModule],
})
export class QuotationModule {}
