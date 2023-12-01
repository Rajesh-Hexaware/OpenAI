import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddquotationComponent } from './addquotation.component';

const routes: Routes = [{ path: '', component: AddquotationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddquotationRoutingModule { }
