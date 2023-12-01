import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatelistComponent } from './statelist.component';

const routes: Routes = [{ path: '', component: StatelistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatelistRoutingModule { }
