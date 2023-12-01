import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

import { FeatherModule } from 'angular-feather';
import {Layers} from 'angular-feather/icons';

const icons = {
  Layers
};

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FeatherModule.pick(icons),

  ]
})
export class ComponentsModule { }
