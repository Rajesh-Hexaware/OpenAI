import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSalesComponent } from './edit-sales.component';

const routes: Routes = [{ path: '', component: EditSalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSalesRoutingModule { }
