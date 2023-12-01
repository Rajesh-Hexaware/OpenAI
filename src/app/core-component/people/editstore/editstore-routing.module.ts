import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditstoreComponent } from './editstore.component';

const routes: Routes = [{ path: '', component: EditstoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditstoreRoutingModule { }
