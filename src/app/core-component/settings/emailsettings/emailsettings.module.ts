import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsettingsRoutingModule } from './emailsettings-routing.module';
import { EmailsettingsComponent } from './emailsettings.component';


@NgModule({
  declarations: [
    EmailsettingsComponent
  ],
  imports: [
    CommonModule,
    EmailsettingsRoutingModule
  ]
})
export class EmailsettingsModule { }
