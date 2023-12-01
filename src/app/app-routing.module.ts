import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core-component/core-component.module').then(
        (m) => m.CoreComponentModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errorpages',
    loadChildren: () =>
      import('./core-component/errorpages/errorpages.module').then((m) => m.ErrorpagesModule),
  },
  {
    path: '**',
    redirectTo: 'errorpages/error404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
