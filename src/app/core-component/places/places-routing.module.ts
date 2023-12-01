import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places.component';

const routes: Routes = [
  { path: '', redirectTo: 'newcountry', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'new-country',
        loadChildren: () =>
          import('./newcountry/newcountry.module').then(
            (m) => m.NewcountryModule
          ),
      },
      {
        path: 'countries-list',
        loadChildren: () =>
          import('./countrieslist/countrieslist.module').then(
            (m) => m.CountrieslistModule
          ),
      },
      {
        path: 'new-state',
        loadChildren: () =>
          import('./newstate/newstate.module').then((m) => m.NewstateModule),
      },
      {
        path: 'state-list',
        loadChildren: () =>
          import('./statelist/statelist.module').then((m) => m.StatelistModule),
      },
      {
        path: 'edit-country',
        loadChildren: () =>
          import('./editcountry/editcountry.module').then(
            (m) => m.EditcountryModule
          ),
      },
      {
        path: 'edit-state',
        loadChildren: () =>
          import('./editstate/editstate.module').then((m) => m.EditstateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule {}
