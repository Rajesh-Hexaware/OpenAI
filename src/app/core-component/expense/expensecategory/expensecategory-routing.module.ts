import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensecategoryComponent } from './expensecategory.component';

const routes: Routes = [{ path: '', component: ExpensecategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensecategoryRoutingModule { }
