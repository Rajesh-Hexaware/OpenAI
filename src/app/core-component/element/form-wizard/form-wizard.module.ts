import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormWizardComponent
  ],
  imports: [
    CommonModule,
    FormWizardRoutingModule,
    sharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormWizardModule { }
