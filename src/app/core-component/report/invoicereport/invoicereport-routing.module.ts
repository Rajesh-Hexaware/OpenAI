import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicereportComponent } from './invoicereport.component';

const routes: Routes = [{ path: '', component: InvoicereportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicereportRoutingModule { }
