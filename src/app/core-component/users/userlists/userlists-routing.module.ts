import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistsComponent } from './userlists.component';

const routes: Routes = [{ path: '', component: UserlistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserlistsRoutingModule { }
