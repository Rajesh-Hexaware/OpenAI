import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSelect2Component } from './form-select2.component';

const routes: Routes = [{ path: '', component: FormSelect2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSelect2RoutingModule { }
