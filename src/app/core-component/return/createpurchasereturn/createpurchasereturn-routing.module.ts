import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepurchasereturnComponent } from './createpurchasereturn.component';

const routes: Routes = [{ path: '', component: CreatepurchasereturnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepurchasereturnRoutingModule { }
