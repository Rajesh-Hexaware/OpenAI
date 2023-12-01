import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrouppermissionsRoutingModule } from './grouppermissions-routing.module';
import { GrouppermissionsComponent } from './grouppermissions.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GrouppermissionsComponent
  ],
  imports: [
    CommonModule,
    GrouppermissionsRoutingModule,
    sharedModule
  ]
})
export class GrouppermissionsModule { }
