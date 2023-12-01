import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesreturnlistComponent } from './salesreturnlist.component';

const routes: Routes = [{ path: '', component: SalesreturnlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesreturnlistRoutingModule { }
