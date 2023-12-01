import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report.component';

const routes: Routes = [
  { path: '', redirectTo: 'purchaseorderreport', pathMatch: 'full' },
  {
    path: '',
    component: ReportComponent,
    children: [
      {
        path: 'purchase-order-report',
        loadChildren: () =>
          import('./purchaseorderreport/purchaseorderreport.module').then(
            (m) => m.PurchaseorderreportModule
          ),
      },
      {
        path: 'inventory-report',
        loadChildren: () =>
          import('./inventoryreport/inventoryreport.module').then(
            (m) => m.InventoryreportModule
          ),
      },
      {
        path: 'sales-report',
        loadChildren: () =>
          import('./salesreport/salesreport.module').then(
            (m) => m.SalesreportModule
          ),
      },
      {
        path: 'invoice-report',
        loadChildren: () =>
          import('./invoicereport/invoicereport.module').then(
            (m) => m.InvoicereportModule
          ),
      },
      {
        path: 'purchase-report',
        loadChildren: () =>
          import('./purchasereport/purchasereport.module').then(
            (m) => m.PurchasereportModule
          ),
      },
      {
        path: 'supplier-report',
        loadChildren: () =>
          import('./supplierreport/supplierreport.module').then(
            (m) => m.SupplierreportModule
          ),
      },
      {
        path: 'customer-report',
        loadChildren: () =>
          import('./customerreport/customerreport.module').then(
            (m) => m.CustomerreportModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
