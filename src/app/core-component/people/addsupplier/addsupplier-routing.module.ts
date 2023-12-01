import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsupplierComponent } from './addsupplier.component';

const routes: Routes = [{ path: '', component: AddsupplierComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddsupplierRoutingModule { }
