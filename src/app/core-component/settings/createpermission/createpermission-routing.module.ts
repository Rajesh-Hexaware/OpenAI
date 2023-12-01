import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepermissionComponent } from './createpermission.component';

const routes: Routes = [{ path: '', component: CreatepermissionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepermissionRoutingModule { }
