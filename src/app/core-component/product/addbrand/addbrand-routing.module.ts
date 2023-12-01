import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbrandComponent } from './addbrand.component';

const routes: Routes = [{ path: '', component: AddbrandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddbrandRoutingModule { }
