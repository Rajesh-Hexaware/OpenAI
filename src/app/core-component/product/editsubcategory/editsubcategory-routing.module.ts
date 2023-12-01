import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditsubcategoryComponent } from './editsubcategory.component';

const routes: Routes = [{ path: '', component: EditsubcategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditsubcategoryRoutingModule { }
