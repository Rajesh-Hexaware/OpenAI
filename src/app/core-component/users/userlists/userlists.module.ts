import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistsRoutingModule } from './userlists-routing.module';
import { UserlistsComponent } from './userlists.component';
import { DatepickerModule } from 'ng2-datepicker';
import { sharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [UserlistsComponent],
  imports: [
    CommonModule,
    UserlistsRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [UserlistsComponent],
})
export class UserlistsModule {}
