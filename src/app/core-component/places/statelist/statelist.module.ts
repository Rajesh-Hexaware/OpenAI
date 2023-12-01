import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatelistRoutingModule } from './statelist-routing.module';
import { StatelistComponent } from './statelist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StatelistComponent],
  imports: [CommonModule, StatelistRoutingModule, sharedModule],
})
export class StatelistModule {}
