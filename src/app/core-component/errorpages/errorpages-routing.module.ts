import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpagesComponent } from './errorpages.component';

const routes: Routes = [
  { path: '', redirectTo: 'error404', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'error404',
        loadChildren: () =>
          import('./error404/error404.module').then((m) => m.Error404Module),
      },
      {
        path: 'error500',
        loadChildren: () =>
          import('./error500/error500.module').then((m) => m.Error500Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorpagesRoutingModule {}
