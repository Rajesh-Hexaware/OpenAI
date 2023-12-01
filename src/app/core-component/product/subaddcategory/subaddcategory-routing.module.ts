import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubaddcategoryComponent } from './subaddcategory.component';

const routes: Routes = [{ path: '', component: SubaddcategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubaddcategoryRoutingModule { }
