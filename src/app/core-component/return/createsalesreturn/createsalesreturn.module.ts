import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { CreatesalesreturnRoutingModule } from './createsalesreturn-routing.module';
import { CreatesalesreturnComponent } from './createsalesreturn.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreatesalesreturnComponent],
  imports: [
    CommonModule,
    CreatesalesreturnRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
})
export class CreatesalesreturnModule {}
