import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpurchaseComponent } from './editpurchase.component';

const routes: Routes = [{ path: '', component: EditpurchaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditpurchaseRoutingModule { }
