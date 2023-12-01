import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditsubcategoryRoutingModule } from './editsubcategory-routing.module';
import { EditsubcategoryComponent } from './editsubcategory.component';


@NgModule({
  declarations: [
    EditsubcategoryComponent
  ],
  imports: [
    CommonModule,
    EditsubcategoryRoutingModule
  ]
})
export class EditsubcategoryModule { }
