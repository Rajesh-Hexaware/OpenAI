import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { CreateexpenseRoutingModule } from './createexpense-routing.module';
import { CreateexpenseComponent } from './createexpense.component';


@NgModule({
  declarations: [
    CreateexpenseComponent
  ],
  imports: [
    CommonModule,
    CreateexpenseRoutingModule,
    DatepickerModule
  ],
  bootstrap: [CreateexpenseComponent]
})
export class CreateexpenseModule { }
