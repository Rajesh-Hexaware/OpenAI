import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrieslistRoutingModule } from './countrieslist-routing.module';
import { CountrieslistComponent } from './countrieslist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CountrieslistComponent],
  imports: [CommonModule, CountrieslistRoutingModule, sharedModule],
})
export class CountrieslistModule {}
