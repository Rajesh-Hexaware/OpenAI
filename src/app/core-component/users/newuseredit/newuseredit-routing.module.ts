import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewusereditComponent } from './newuseredit.component';

const routes: Routes = [{ path: '', component: NewusereditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewusereditRoutingModule { }
