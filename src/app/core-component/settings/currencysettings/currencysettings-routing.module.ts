import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencysettingsComponent } from './currencysettings.component';

const routes: Routes = [{ path: '', component: CurrencysettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencysettingsRoutingModule { }
