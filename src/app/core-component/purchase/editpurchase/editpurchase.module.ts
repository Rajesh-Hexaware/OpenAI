import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditpurchaseRoutingModule } from './editpurchase-routing.module';
import { EditpurchaseComponent } from './editpurchase.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditpurchaseComponent],
  imports: [
    CommonModule,
    EditpurchaseRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
  bootstrap: [EditpurchaseComponent],
})
export class EditpurchaseModule {}
