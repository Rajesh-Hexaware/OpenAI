import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './transfer.component';


const routes: Routes = [
  { path: '', redirectTo:'transferlist', pathMatch:'full'},

  {
    path: '',
    children: [
  {
    path: 'transfer-list',
    loadChildren: () =>
      import('./transferlist/transferlist.module').then(
        (m) => m.TransferlistModule
      ),
  },
  {
    path: 'add-transfer',
    loadChildren: () =>
      import('./addtransfer/addtransfer.module').then(
        (m) => m.AddtransferModule
      ),
  },
  {
    path: 'import-transfer',
    loadChildren: () =>
      import('./importtransfer/importtransfer.module').then(
        (m) => m.ImporttransferModule
      ),
  },
  {
    path: 'edit-transfer',
    loadChildren: () =>
      import('./edittransfer/edittransfer.module').then(
        (m) => m.EdittransferModule
      ),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRoutingModule {}
