import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstoreComponent } from './addstore.component';

const routes: Routes = [{ path: '', component: AddstoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddstoreRoutingModule { }
