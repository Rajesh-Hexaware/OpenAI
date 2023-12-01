import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropRoutingModule } from './drag-drop-routing.module';
import { DragDropComponent } from './drag-drop.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DragDropComponent
  ],
  imports: [
    CommonModule,
    DragDropRoutingModule,
    sharedModule

  ]
})
export class DragDropModule { }
