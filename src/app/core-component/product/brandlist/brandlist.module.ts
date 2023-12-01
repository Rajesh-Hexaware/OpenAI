import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandlistRoutingModule } from './brandlist-routing.module';
import { BrandlistComponent } from './brandlist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BrandlistComponent],
  imports: [CommonModule, BrandlistRoutingModule, sharedModule],
})
export class BrandlistModule {}
