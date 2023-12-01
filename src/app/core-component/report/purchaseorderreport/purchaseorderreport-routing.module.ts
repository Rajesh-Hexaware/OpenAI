import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseorderreportComponent } from './purchaseorderreport.component';

const routes: Routes = [{ path: '', component: PurchaseorderreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseorderreportRoutingModule { }
