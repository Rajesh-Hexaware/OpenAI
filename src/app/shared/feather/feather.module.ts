import { NgModule } from '@angular/core';

import { Layers, User, UserCheck, FileText, File } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

const icons = {
  Layers,
  User,
  UserCheck,
  FileText,
  File,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class FeatherIconModule {}
