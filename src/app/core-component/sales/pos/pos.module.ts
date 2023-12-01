import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PosComponent],
  imports: [CommonModule, PosRoutingModule, sharedModule],
})
export class PosModule {}
