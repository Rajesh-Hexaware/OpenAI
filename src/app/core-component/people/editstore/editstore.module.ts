import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditstoreRoutingModule } from './editstore-routing.module';
import { EditstoreComponent } from './editstore.component';


@NgModule({
  declarations: [
    EditstoreComponent
  ],
  imports: [
    CommonModule,
    EditstoreRoutingModule
  ]
})
export class EditstoreModule { }
