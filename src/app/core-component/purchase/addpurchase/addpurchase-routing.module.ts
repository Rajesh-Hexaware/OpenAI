import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpurchaseComponent } from './addpurchase.component';

const routes: Routes = [{ path: '', component: AddpurchaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddpurchaseRoutingModule { }
