import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditquotationRoutingModule } from './editquotation-routing.module';
import { EditquotationComponent } from './editquotation.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditquotationComponent],
  imports: [
    CommonModule,
    EditquotationRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
  bootstrap: [EditquotationComponent],
})
export class EditquotationModule {}
