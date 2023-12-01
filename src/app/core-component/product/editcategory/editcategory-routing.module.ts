import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcategoryComponent } from './editcategory.component';

const routes: Routes = [{ path: '', component: EditcategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditcategoryRoutingModule { }
