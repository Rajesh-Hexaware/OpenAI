import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcategoryRoutingModule } from './addcategory-routing.module';
import { AddcategoryComponent } from './addcategory.component';


@NgModule({
  declarations: [
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    AddcategoryRoutingModule
  ]
})
export class AddcategoryModule { }
