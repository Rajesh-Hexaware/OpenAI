import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandlistRoutingModule } from './brandlist-routing.module';
import { BrandlistComponent } from './brandlist.component';


import { sharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BrandlistComponent],
  imports: [CommonModule, BrandlistRoutingModule, sharedModule,ReactiveFormsModule],
})
export class BrandlistModule {}
