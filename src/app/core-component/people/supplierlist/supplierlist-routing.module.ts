import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierlistComponent } from './supplierlist.component';

const routes: Routes = [{ path: '', component: SupplierlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierlistRoutingModule { }
