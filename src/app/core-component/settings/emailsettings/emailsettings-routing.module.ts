import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailsettingsComponent } from './emailsettings.component';

const routes: Routes = [{ path: '', component: EmailsettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsettingsRoutingModule { }
