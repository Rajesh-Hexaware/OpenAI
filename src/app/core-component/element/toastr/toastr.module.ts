import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrRoutingModule } from './toastr-routing.module';
import { ToastrComponent } from './toastr.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToastrComponent
  ],
  imports: [
    CommonModule,
    ToastrRoutingModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true
      
    }), 
    FormsModule
  ],
  providers: [
    { 
      provide: ToastrService, 
    }
  ]
  
})
export class ToastrModules { }
