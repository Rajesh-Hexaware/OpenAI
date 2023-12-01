import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrieslistComponent } from './countrieslist.component';

const routes: Routes = [{ path: '', component: CountrieslistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountrieslistRoutingModule { }
