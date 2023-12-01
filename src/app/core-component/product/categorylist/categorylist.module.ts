import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorylistRoutingModule } from './categorylist-routing.module';
import { CategorylistComponent } from './categorylist.component';

import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CategorylistComponent],
  imports: [CommonModule, CategorylistRoutingModule, sharedModule],
})
export class CategorylistModule {}
