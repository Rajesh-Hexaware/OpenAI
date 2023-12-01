import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsettingsComponent } from './paymentsettings.component';

const routes: Routes = [{ path: '', component: PaymentsettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsettingsRoutingModule { }
