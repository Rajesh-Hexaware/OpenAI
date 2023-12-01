import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdittransferComponent } from './edittransfer.component';

const routes: Routes = [{ path: '', component: EdittransferComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdittransferRoutingModule { }
