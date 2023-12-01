import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierreportComponent } from './supplierreport.component';

const routes: Routes = [{ path: '', component: SupplierreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierreportRoutingModule { }
