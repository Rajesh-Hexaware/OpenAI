import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { AddtransferRoutingModule } from './addtransfer-routing.module';
import { AddtransferComponent } from './addtransfer.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AddtransferComponent],
  imports: [
    CommonModule,
    AddtransferRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [],
})
export class AddtransferModule {}
