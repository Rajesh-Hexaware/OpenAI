import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcustomerComponent } from './editcustomer.component';

const routes: Routes = [{ path: '', component: EditcustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditcustomerRoutingModule { }
