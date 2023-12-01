import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrComponent } from './toastr.component';

const routes: Routes = [{ path: '', component: ToastrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToastrRoutingModule { }
