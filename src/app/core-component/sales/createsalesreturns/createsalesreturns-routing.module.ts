import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatesalesreturnsComponent } from './createsalesreturns.component';

const routes: Routes = [{ path: '', component: CreatesalesreturnsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatesalesreturnsRoutingModule { }
