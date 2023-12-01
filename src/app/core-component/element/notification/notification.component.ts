import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { routes } from 'src/app/core/helpers/routes'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public routes = routes;
  typeSuccess() {
    this.toastr.success('Have fun storming the castle!', 'Notification fun!', {
      timeOut:1000,
      positionClass:'toast-bottom-right'
    });
  }
  
  typeWarning() {
    this.toastr.warning('Have fun storming the castle!', 'Notification fun!', {
      timeOut:1000,
      positionClass:'toast-bottom-right'
    }) 
  }

  typeInfo() {
    this.toastr.info('Have fun storming the castle!', 'Toastr fun!', {
      timeOut:1000,
      positionClass:'toast-bottom-right'
    }) 
  }

  typeError() {
    this.toastr.error('Have fun storming the castle!', 'Notification fun!', {
      timeOut:1000,
      positionClass:'toast-bottom-right'
    }) 
  }

  confirmText() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ms-2 btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.toastr.success(
          'Deleted!',
          'Your file has been deleted.',
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.toastr.error(
          'Cancelled',
          'Your imaginary file is safe :)',
        )
      }
    })
  }
  confirmClick() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: ' btn btn-info',
        cancelButton: 'ms-2 btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you confirm?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.toastr.success(
          'Deleted!',
          'Your file has been deleted.',
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.toastr.error(
          'Cancelled',
          'Your imaginary file is safe :)',
        )
      }
    })
  }

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }


}
