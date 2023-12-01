import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferlistComponent } from './transferlist.component';

const routes: Routes = [{ path: '', component: TransferlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferlistRoutingModule { }
