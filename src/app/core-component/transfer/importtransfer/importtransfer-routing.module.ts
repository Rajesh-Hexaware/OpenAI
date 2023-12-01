import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImporttransferComponent } from './importtransfer.component';

const routes: Routes = [{ path: '', component: ImporttransferComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImporttransferRoutingModule { }
