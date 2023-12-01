import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { ExpensecategoryRoutingModule } from './expensecategory-routing.module';
import { ExpensecategoryComponent } from './expensecategory.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ExpensecategoryComponent],
  imports: [
    CommonModule,
    ExpensecategoryRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [ExpensecategoryComponent],
})
export class ExpensecategoryModule {}
