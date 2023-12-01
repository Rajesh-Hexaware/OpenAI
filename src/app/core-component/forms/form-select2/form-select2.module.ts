import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSelect2RoutingModule } from './form-select2-routing.module';
import { FormSelect2Component } from './form-select2.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormSelect2Component
  ],
  imports: [
    CommonModule,
    FormSelect2RoutingModule,
    sharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormSelect2Module { }
