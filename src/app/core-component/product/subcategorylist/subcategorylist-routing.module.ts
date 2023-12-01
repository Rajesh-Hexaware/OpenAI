import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategorylistComponent } from './subcategorylist.component';

const routes: Routes = [{ path: '', component: SubcategorylistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategorylistRoutingModule { }
