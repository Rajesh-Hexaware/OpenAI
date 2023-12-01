import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist.component';


import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserlistComponent],
  imports: [CommonModule, UserlistRoutingModule, sharedModule],
})
export class UserlistModule {}
