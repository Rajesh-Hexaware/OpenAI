import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnComponent } from './return.component';



const routes: Routes = [
  { path: '', redirectTo: 'salesreturnlist', pathMatch:'full'},
  {
    path:'',
    children:[
  {
    path: 'sales-return-list',
    loadChildren: () =>
      import('./salesreturnlist/salesreturnlist.module').then(
        (m) => m.SalesreturnlistModule
      ),
  },
  {
    path: 'create-sales-return',
    loadChildren: () =>
      import('./createsalesreturn/createsalesreturn.module').then(
        (m) => m.CreatesalesreturnModule
      ),
  },
  {
    path: 'purchase-return-list',
    loadChildren: () =>
      import('./purchasereturnlist/purchasereturnlist.module').then(
        (m) => m.PurchasereturnlistModule
      ),
  },
  {
    path: 'create-purchase-return',
    loadChildren: () =>
      import('./createpurchasereturn/createpurchasereturn.module').then(
        (m) => m.CreatepurchasereturnModule
      ),
  },
  {
    path: 'edit-sales-return',
    loadChildren: () =>
      import('./editsalesreturn/editsalesreturn.module').then(
        (m) => m.EditsalesreturnModule
      ),
  },
  {
    path: 'edit-purchase-return',
    loadChildren: () =>
      import('./editpurchasereturn/editpurchasereturn.module').then(
        (m) => m.EditpurchasereturnModule
      ),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnRoutingModule {}
