import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'generalsettings', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'general-settings',
        loadChildren: () =>
          import('./generalsettings/generalsettings.module').then(
            (m) => m.GeneralsettingsModule
          ),
      },
      {
        path: 'email-settings',
        loadChildren: () =>
          import('./emailsettings/emailsettings.module').then(
            (m) => m.EmailsettingsModule
          ),
      },
      {
        path: 'payment-settings',
        loadChildren: () =>
          import('./paymentsettings/paymentsettings.module').then(
            (m) => m.PaymentsettingsModule
          ),
      },
      {
        path: 'currency-settings',
        loadChildren: () =>
          import('./currencysettings/currencysettings.module').then(
            (m) => m.CurrencysettingsModule
          ),
      },
      {
        path: 'group-permissions',
        loadChildren: () =>
          import('./grouppermissions/grouppermissions.module').then(
            (m) => m.GrouppermissionsModule
          ),
      },
      {
        path: 'tax-rates',
        loadChildren: () =>
          import('./taxrates/taxrates.module').then((m) => m.TaxratesModule),
      },
      {
        path: 'create-permission',
        loadChildren: () =>
          import('./createpermission/createpermission.module').then(
            (m) => m.CreatepermissionModule
          ),
      },
      {
        path: 'edit-permission',
        loadChildren: () =>
          import('./editpermission/editpermission.module').then(
            (m) => m.EditpermissionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
