import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', redirectTo: 'newuser', pathMatch: 'full' },
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'new-user',
        loadChildren: () =>
          import('./newuser/newuser.module').then((m) => m.NewuserModule),
      },
      {
        path: 'user-lists',
        loadChildren: () =>
          import('./userlists/userlists.module').then((m) => m.UserlistsModule),
      },
      {
        path: 'new-user-edit',
        loadChildren: () =>
          import('./newuseredit/newuseredit.module').then(
            (m) => m.NewusereditModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
