import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorylistComponent } from './categorylist.component';

const routes: Routes = [{ path: '', component: CategorylistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorylistRoutingModule { }
