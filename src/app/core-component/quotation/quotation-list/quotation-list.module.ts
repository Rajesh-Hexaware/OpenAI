import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { QuotationListRoutingModule } from './quotation-list-routing.module';
import { QuotationListComponent } from './quotation-list.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [QuotationListComponent],
  imports: [
    CommonModule,
    QuotationListRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [QuotationListComponent],
})
export class QuotationListModule {}
