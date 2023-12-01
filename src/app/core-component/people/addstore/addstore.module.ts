import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstoreRoutingModule } from './addstore-routing.module';
import { AddstoreComponent } from './addstore.component';


@NgModule({
  declarations: [
    AddstoreComponent
  ],
  imports: [
    CommonModule,
    AddstoreRoutingModule
  ]
})
export class AddstoreModule { }
