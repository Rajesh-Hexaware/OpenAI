import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferlistRoutingModule } from './transferlist-routing.module';
import { TransferlistComponent } from './transferlist.component';
import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TransferlistComponent
  ],
  imports: [
    CommonModule,
    TransferlistRoutingModule,

    sharedModule,
    DatepickerModule,

  ],
 bootstrap: [TransferlistComponent]

})
export class TransferlistModule { }
