import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpurchasereturnRoutingModule } from './editpurchasereturn-routing.module';
import { EditpurchasereturnComponent } from './editpurchasereturn.component';
import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditpurchasereturnComponent],
  imports: [
    CommonModule,
    EditpurchasereturnRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
  bootstrap: [EditpurchasereturnComponent],
})
export class EditpurchasereturnModule {}
