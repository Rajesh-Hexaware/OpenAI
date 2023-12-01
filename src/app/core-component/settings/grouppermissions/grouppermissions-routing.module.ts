import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrouppermissionsComponent } from './grouppermissions.component';

const routes: Routes = [{ path: '', component: GrouppermissionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrouppermissionsRoutingModule { }
