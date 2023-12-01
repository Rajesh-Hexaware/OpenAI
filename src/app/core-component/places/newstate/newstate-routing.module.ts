import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewstateComponent } from './newstate.component';

const routes: Routes = [{ path: '', component: NewstateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewstateRoutingModule { }
