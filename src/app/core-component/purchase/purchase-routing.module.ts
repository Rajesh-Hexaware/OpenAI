import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
  { path: '', redirectTo: 'purchaselist', pathMatch: 'full' },
  {
    path: '',
    component: PurchaseComponent,
    children: [
      {
        path: 'purchase-list',
        loadChildren: () =>
          import('./purchaselist/purchaselist.module').then(
            (m) => m.PurchaselistModule
          ),
      },
      {
        path: 'add-purchase',
        loadChildren: () =>
          import('./addpurchase/addpurchase.module').then(
            (m) => m.AddpurchaseModule
          ),
      },
      {
        path: 'import-purchase',
        loadChildren: () =>
          import('./importpurchase/importpurchase.module').then(
            (m) => m.ImportpurchaseModule
          ),
      },
      {
        path: 'edit-purchase',
        loadChildren: () =>
          import('./editpurchase/editpurchase.module').then(
            (m) => m.EditpurchaseModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
