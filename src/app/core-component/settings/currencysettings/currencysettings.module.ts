import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencysettingsRoutingModule } from './currencysettings-routing.module';
import { CurrencysettingsComponent } from './currencysettings.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CurrencysettingsComponent],
  imports: [CommonModule, CurrencysettingsRoutingModule, sharedModule],
})
export class CurrencysettingsModule {}
