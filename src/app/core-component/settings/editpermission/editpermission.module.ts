import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpermissionRoutingModule } from './editpermission-routing.module';
import { EditpermissionComponent } from './editpermission.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditpermissionComponent],
  imports: [CommonModule, EditpermissionRoutingModule, sharedModule],
})
export class EditpermissionModule {}
