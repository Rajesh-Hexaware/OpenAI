import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { FeatherModule } from 'angular-feather';
import { User, UserCheck, FileText, File } from 'angular-feather/icons';
import { sharedModule } from 'src/app/shared/shared.index';

const icons = {
  User,
  UserCheck,
  FileText,
  File,
};
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, sharedModule],
  exports: [FeatherModule],
})
export class DashboardModule {}
