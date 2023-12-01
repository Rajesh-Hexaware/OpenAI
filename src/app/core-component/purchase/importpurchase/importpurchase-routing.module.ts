import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportpurchaseComponent } from './importpurchase.component';

const routes: Routes = [{ path: '', component: ImportpurchaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpurchaseRoutingModule { }
