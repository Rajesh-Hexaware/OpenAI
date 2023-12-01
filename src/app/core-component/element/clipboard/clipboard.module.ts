import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardRoutingModule } from './clipboard-routing.module';
import { ClipboardComponent } from './clipboard.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ClipboardComponent
  ],
  imports: [
    CommonModule,
    ClipboardRoutingModule,
    sharedModule
  ]
})
export class ClipboardModule { }
