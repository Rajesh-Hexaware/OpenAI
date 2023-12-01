import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarcodeRoutingModule } from './barcode-routing.module';
import { BarcodeComponent } from './barcode.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BarcodeComponent],
  imports: [CommonModule, BarcodeRoutingModule, sharedModule],
})
export class BarcodeModule {}
