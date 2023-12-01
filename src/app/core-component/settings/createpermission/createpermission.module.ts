import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepermissionRoutingModule } from './createpermission-routing.module';
import { CreatepermissionComponent } from './createpermission.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreatepermissionComponent],
  imports: [CommonModule, CreatepermissionRoutingModule, sharedModule],
})
export class CreatepermissionModule {}
