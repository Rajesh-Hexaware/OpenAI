import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsettingsRoutingModule } from './paymentsettings-routing.module';
import { PaymentsettingsComponent } from './paymentsettings.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PaymentsettingsComponent],
  imports: [CommonModule, PaymentsettingsRoutingModule, sharedModule],
})
export class PaymentsettingsModule {}
