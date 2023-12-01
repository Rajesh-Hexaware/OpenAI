import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { SaleslistRoutingModule } from './saleslist-routing.module';
import { SaleslistComponent } from './saleslist.component';

import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SaleslistComponent],
  imports: [
    CommonModule,
    SaleslistRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [SaleslistComponent],
})
export class SaleslistModule {}
