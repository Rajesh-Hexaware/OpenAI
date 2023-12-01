import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxRoutingModule } from './lightbox-routing.module';
import { LightboxComponent } from './lightbox.component';
import { NgxbootstrapModule } from 'src/app/shared/ngx-bootstrap/ngxbootstrap.module';


@NgModule({
  declarations: [
    LightboxComponent
  ],
  imports: [
    CommonModule,
    LightboxRoutingModule,
    NgxbootstrapModule
  ]
})
export class LightboxModule { }
