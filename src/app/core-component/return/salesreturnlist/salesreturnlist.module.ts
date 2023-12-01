import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesreturnlistRoutingModule } from './salesreturnlist-routing.module';
import { SalesreturnlistComponent } from './salesreturnlist.component';
import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SalesreturnlistComponent],
  imports: [
    CommonModule,
    SalesreturnlistRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [SalesreturnlistComponent],
})
export class SalesreturnlistModule {}
