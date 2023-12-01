import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditbrandComponent } from './editbrand.component';

const routes: Routes = [{ path: '', component: EditbrandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditbrandRoutingModule { }
