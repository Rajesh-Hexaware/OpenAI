import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcountryComponent } from './newcountry.component';

const routes: Routes = [{ path: '', component: NewcountryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewcountryRoutingModule { }
