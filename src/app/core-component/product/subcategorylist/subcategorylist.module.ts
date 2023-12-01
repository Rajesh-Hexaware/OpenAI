import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategorylistRoutingModule } from './subcategorylist-routing.module';
import { SubcategorylistComponent } from './subcategorylist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SubcategorylistComponent],
  imports: [CommonModule, SubcategorylistRoutingModule, sharedModule],
})
export class SubcategorylistModule {}
