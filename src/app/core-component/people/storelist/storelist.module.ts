import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorelistRoutingModule } from './storelist-routing.module';
import { StorelistComponent } from './storelist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StorelistComponent],
  imports: [CommonModule, StorelistRoutingModule, sharedModule],
})
export class StorelistModule {}
