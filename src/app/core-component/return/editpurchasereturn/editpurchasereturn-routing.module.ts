import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpurchasereturnComponent } from './editpurchasereturn.component';

const routes: Routes = [{ path: '', component: EditpurchasereturnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditpurchasereturnRoutingModule { }
