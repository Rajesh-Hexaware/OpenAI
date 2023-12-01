import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorelistComponent } from './storelist.component';

const routes: Routes = [{ path: '', component: StorelistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorelistRoutingModule { }
