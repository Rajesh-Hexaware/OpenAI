import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubaddcategoryRoutingModule } from './subaddcategory-routing.module';
import { SubaddcategoryComponent } from './subaddcategory.component';


@NgModule({
  declarations: [
    SubaddcategoryComponent
  ],
  imports: [
    CommonModule,
    SubaddcategoryRoutingModule
  ]
})
export class SubaddcategoryModule { }
