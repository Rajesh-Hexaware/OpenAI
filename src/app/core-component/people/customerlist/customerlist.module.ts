import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerlistRoutingModule } from './customerlist-routing.module';
import { CustomerlistComponent } from './customerlist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CustomerlistComponent],
  imports: [CommonModule, CustomerlistRoutingModule, sharedModule],
})
export class CustomerlistModule {}
