import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleslistComponent } from './saleslist.component';

const routes: Routes = [{ path: '', component: SaleslistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleslistRoutingModule { }
