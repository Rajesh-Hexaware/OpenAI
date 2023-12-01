import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportproductComponent } from './importproduct.component';

const routes: Routes = [{ path: '', component: ImportproductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportproductRoutingModule { }
