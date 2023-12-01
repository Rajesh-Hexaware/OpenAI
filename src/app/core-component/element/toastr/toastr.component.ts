import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  public routes = routes;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  typeSuccess() {
    this.toastr.success('Have fun storming the castle!', 'Toastr fun!', {
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-right'
    });
  }
  typeInfo() {
    this.toastr.info('Have fun storming the castle!', 'Toastr fun!', {
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-right'
    }) 
  }

  typeWarning() {
    this.toastr.warning('Have fun storming the castle!', 'Toastr fun!', {
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-right'
    }) 
  }

  typeError() {
    this.toastr.error('Have fun storming the castle!', 'Toastr fun!', {
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-right'
    }) 
  }

  topLeft() {
    this.toastr.info('I do not think that word means what you think it means.','Top left',{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-left'
    })
  }
  topCenter() {
    this.toastr.info('I do not think that word means what you think it means.','Top center',{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-center'
    })
  }

  topRight() {
    this.toastr.info('I do not think that word means what you think it means.','Top right',{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-right'
    })
  }
  fullWidth() {
    this.toastr.info('I do not think that word means what you think it means.','Top full width',{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-top-full-width'
    })
  }

  bottomLeft() {
    this.toastr.info('Have fun storming the castle!','Bottom Left',{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-bottom-left'
    })
  }

  bottomCenter() {
    this.toastr.info('Have fun storming the castle!','Bottom Center',{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-bottom-center'
    })
  }

  bottomRight() {
    this.toastr.info('Have fun storming the castle!','Bottom Right',{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-bottom-right'
    })
  }

  bottomFull() {
    this.toastr.info('Have fun storming the castle!','Bottom full width',{
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      positionClass:'toast-bottom-full-width'
    })
  }

  notification() {
    this.toastr.success('Have fun storming the castle!','Notification', {  timeOut:1000,});
  }

  closeButton() {
    this.toastr.success('Have fun storming the castle!','Close Button', { closeButton:true, positionClass: 'toast-top-right', timeOut:5000});
  }

  progressBar() {
    this.toastr.success('Have fun storming the castle!','Progress Bar', { closeButton:true, positionClass: 'toast-top-right', progressBar:true,
    progressAnimation:'increasing', timeOut:1000});
  }

  clearToast() {
    this.toastr.info('Have fun storming the castle!','Progress Bar', { closeButton:true, positionClass: 'toast-top-right', timeOut:5000});
  }

  showRemove() {
    this.toastr.warning('I do not think that word means what you think it means.','Show Toast', {disableTimeOut: true, timeOut:5000, positionClass: 'toast-top-right'});
  }

  remove() {
    this.toastr.clear();
  }

  fastDuration() {
    this.toastr.info('I do not think that word means what you think it means.','Show Toast', { timeOut:500, positionClass: 'toast-top-right'});
  }

  slowDuration() {
    this.toastr.warning('I do not think that word means what you think it means.','Show Toast', {timeOut:1000, positionClass: 'toast-top-right'});
  }
  
  timeouts() {
    this.toastr.error('I do not think that word means what you think it means.','Show Toast', { timeOut:300, positionClass: 'toast-top-right'});
  }

  stickys() {
    this.toastr.success('I do not think that word means what you think it means.','Show Toast', {disableTimeOut: true, timeOut:10000, positionClass: 'toast-top-right'});
  }
}
