import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepurchasereturnRoutingModule } from './createpurchasereturn-routing.module';
import { CreatepurchasereturnComponent } from './createpurchasereturn.component';
import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreatepurchasereturnComponent],
  imports: [
    CommonModule,
    CreatepurchasereturnRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
  bootstrap: [CreatepurchasereturnComponent],
})
export class CreatepurchasereturnModule {}
