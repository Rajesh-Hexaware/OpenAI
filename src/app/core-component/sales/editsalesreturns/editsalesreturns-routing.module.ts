import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditsalesreturnsComponent } from './editsalesreturns.component';

const routes: Routes = [{ path: '', component: EditsalesreturnsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditsalesreturnsRoutingModule { }
