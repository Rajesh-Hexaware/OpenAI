import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { AddpurchaseRoutingModule } from './addpurchase-routing.module';
import { AddpurchaseComponent } from './addpurchase.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AddpurchaseComponent],
  imports: [
    CommonModule,
    AddpurchaseRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [AddpurchaseComponent],
})
export class AddpurchaseModule {}
