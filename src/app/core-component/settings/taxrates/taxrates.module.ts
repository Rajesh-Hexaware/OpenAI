import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxratesRoutingModule } from './taxrates-routing.module';
import { TaxratesComponent } from './taxrates.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TaxratesComponent],
  imports: [CommonModule, TaxratesRoutingModule, sharedModule],
})
export class TaxratesModule {}
