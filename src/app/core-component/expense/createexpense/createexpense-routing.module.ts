import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateexpenseComponent } from './createexpense.component';

const routes: Routes = [{ path: '', component: CreateexpenseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateexpenseRoutingModule { }
