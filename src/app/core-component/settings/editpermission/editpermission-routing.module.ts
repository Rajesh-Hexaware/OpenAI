import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpermissionComponent } from './editpermission.component';

const routes: Routes = [{ path: '', component: EditpermissionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditpermissionRoutingModule { }
