import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { CreatesalesreturnsRoutingModule } from './createsalesreturns-routing.module';
import { CreatesalesreturnsComponent } from './createsalesreturns.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreatesalesreturnsComponent],
  imports: [
    CommonModule,
    CreatesalesreturnsRoutingModule,
    DatepickerModule,
    sharedModule,
  ],
  bootstrap: [CreatesalesreturnsComponent],
})
export class CreatesalesreturnsModule {}
