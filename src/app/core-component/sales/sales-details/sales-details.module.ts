import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesDetailsRoutingModule } from './sales-details-routing.module';
import { SalesDetailsComponent } from './sales-details.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SalesDetailsComponent],
  imports: [CommonModule, SalesDetailsRoutingModule, sharedModule],
})
export class SalesDetailsModule {}
