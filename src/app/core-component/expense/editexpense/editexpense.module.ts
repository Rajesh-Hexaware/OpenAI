import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditexpenseRoutingModule } from './editexpense-routing.module';
import { EditexpenseComponent } from './editexpense.component';


@NgModule({
  declarations: [
    EditexpenseComponent
  ],
  imports: [
    CommonModule,
    EditexpenseRoutingModule,
    DatepickerModule
  ],
  bootstrap: [EditexpenseComponent]
})
export class EditexpenseModule { }
