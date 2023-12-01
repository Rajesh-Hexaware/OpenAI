import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralsettingsComponent } from './generalsettings.component';

const routes: Routes = [{ path: '', component: GeneralsettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralsettingsRoutingModule { }
