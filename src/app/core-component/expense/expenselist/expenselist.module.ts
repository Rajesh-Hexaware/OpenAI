import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { ExpenselistRoutingModule } from './expenselist-routing.module';
import { ExpenselistComponent } from './expenselist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ExpenselistComponent],
  imports: [
    CommonModule,
    ExpenselistRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [ExpenselistComponent],
})
export class ExpenselistModule {}
