import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdduserRoutingModule } from './adduser-routing.module';
import { AdduserComponent } from './adduser.component';


@NgModule({
  declarations: [
    AdduserComponent
  ],
  imports: [
    CommonModule,
    AdduserRoutingModule
  ]
})
export class AdduserModule { }
