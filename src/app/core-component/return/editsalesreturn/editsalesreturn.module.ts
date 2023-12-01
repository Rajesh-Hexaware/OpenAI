import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditsalesreturnRoutingModule } from './editsalesreturn-routing.module';
import { EditsalesreturnComponent } from './editsalesreturn.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditsalesreturnComponent],
  imports: [
    CommonModule,
    EditsalesreturnRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
  bootstrap: [EditsalesreturnComponent],
})
export class EditsalesreturnModule {}
