import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcategoryRoutingModule } from './editcategory-routing.module';
import { EditcategoryComponent } from './editcategory.component';


@NgModule({
  declarations: [
    EditcategoryComponent
  ],
  imports: [
    CommonModule,
    EditcategoryRoutingModule
  ]
})
export class EditcategoryModule { }
