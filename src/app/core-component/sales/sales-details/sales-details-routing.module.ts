import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDetailsComponent } from './sales-details.component';

const routes: Routes = [{ path: '', component: SalesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesDetailsRoutingModule { }
