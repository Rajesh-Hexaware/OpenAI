import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMaskRoutingModule } from './form-mask-routing.module';
import { FormMaskComponent } from './form-mask.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormMaskComponent
  ],
  imports: [
    CommonModule,
    FormMaskRoutingModule,
    sharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormMaskModule { }
