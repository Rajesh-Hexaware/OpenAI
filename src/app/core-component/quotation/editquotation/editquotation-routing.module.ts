import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditquotationComponent } from './editquotation.component';

const routes: Routes = [{ path: '', component: EditquotationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditquotationRoutingModule { }
