import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryreportComponent } from './inventoryreport.component';

const routes: Routes = [{ path: '', component: InventoryreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryreportRoutingModule { }
