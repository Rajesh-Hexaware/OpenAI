import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandlistComponent } from './brandlist.component';

const routes: Routes = [{ path: '', component: BrandlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandlistRoutingModule { }
