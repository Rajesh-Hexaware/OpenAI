import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatesalesreturnComponent } from './createsalesreturn.component';

const routes: Routes = [{ path: '', component: CreatesalesreturnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatesalesreturnRoutingModule { }
