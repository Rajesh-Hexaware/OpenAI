import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { SalesreturnlistsRoutingModule } from './salesreturnlists-routing.module';
import { SalesreturnlistsComponent } from './salesreturnlists.component';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SalesreturnlistsComponent],
  imports: [
    CommonModule,
    SalesreturnlistsRoutingModule,
    sharedModule,
    DatepickerModule,
  ],
  bootstrap: [SalesreturnlistsComponent],
})
export class SalesreturnlistsModule {}
