import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditsupplierComponent } from './editsupplier.component';

const routes: Routes = [{ path: '', component: EditsupplierComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditsupplierRoutingModule { }
