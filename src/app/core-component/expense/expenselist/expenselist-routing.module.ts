import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenselistComponent } from './expenselist.component';

const routes: Routes = [{ path: '', component: ExpenselistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenselistRoutingModule { }
