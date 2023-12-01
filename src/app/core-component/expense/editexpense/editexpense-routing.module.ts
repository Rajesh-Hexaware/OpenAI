import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditexpenseComponent } from './editexpense.component';

const routes: Routes = [{ path: '', component: EditexpenseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditexpenseRoutingModule { }
