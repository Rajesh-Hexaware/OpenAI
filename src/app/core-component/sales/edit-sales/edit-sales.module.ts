import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditSalesRoutingModule } from './edit-sales-routing.module';
import { EditSalesComponent } from './edit-sales.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditSalesComponent],
  imports: [
    CommonModule,
    EditSalesRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
  bootstrap: [EditSalesComponent],
})
export class EditSalesModule {}
