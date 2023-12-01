import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcountryComponent } from './editcountry.component';

const routes: Routes = [{ path: '', component: EditcountryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditcountryRoutingModule { }
