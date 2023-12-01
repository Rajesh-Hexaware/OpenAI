import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesreturnlistsComponent } from './salesreturnlists.component';

const routes: Routes = [{ path: '', component: SalesreturnlistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesreturnlistsRoutingModule { }
