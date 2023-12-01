import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense.component';

const routes: Routes = [
  { path: '', redirectTo: 'expenselist', pathMatch: 'full' },
  {
    path: '',
    component: ExpenseComponent,
    children: [
      {
        path: 'expense-list',
        loadChildren: () =>
          import('./expenselist/expenselist.module').then(
            (m) => m.ExpenselistModule
          ),
      },
      {
        path: 'expense-category',
        loadChildren: () =>
          import('./expensecategory/expensecategory.module').then(
            (m) => m.ExpensecategoryModule
          ),
      },
      {
        path: 'create-expense',
        loadChildren: () =>
          import('./createexpense/createexpense.module').then(
            (m) => m.CreateexpenseModule
          ),
      },
      {
        path: 'edit-expense',
        loadChildren: () =>
          import('./editexpense/editexpense.module').then(
            (m) => m.EditexpenseModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseRoutingModule {}
