import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditsalesreturnComponent } from './editsalesreturn.component';

const routes: Routes = [{ path: '', component: EditsalesreturnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditsalesreturnRoutingModule { }
