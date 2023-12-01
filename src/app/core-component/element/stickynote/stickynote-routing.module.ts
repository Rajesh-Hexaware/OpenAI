import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickynoteComponent } from './stickynote.component';

const routes: Routes = [{ path: '', component: StickynoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickynoteRoutingModule { }
