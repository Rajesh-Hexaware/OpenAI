import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetalertsComponent } from './sweetalerts.component';

const routes: Routes = [{ path: '', component: SweetalertsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SweetalertsRoutingModule { }
