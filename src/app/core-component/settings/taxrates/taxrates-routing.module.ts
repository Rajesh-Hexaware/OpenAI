import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxratesComponent } from './taxrates.component';

const routes: Routes = [{ path: '', component: TaxratesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxratesRoutingModule { }
