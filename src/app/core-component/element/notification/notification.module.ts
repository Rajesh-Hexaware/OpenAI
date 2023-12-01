import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true
    }), 
  ],
  providers: [
    { 
      provide: ToastrService, 
    }
  ]
})
export class NotificationModule { }
