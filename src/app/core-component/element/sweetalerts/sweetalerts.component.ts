import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalerts',
  templateUrl: './sweetalerts.component.html',
  styleUrls: ['./sweetalerts.component.scss']
})
export class SweetalertsComponent implements OnInit {
  public routes = routes;


  constructor() { }

  basicAlert() {
    Swal.fire("Any fool can use a computer")
  }
  withTitle() {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?"

    })
  }
  footerAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  topStart() {
    Swal.fire ({
      position: "top-start",
      text: "Your work has been saved"
    })
  }
  topEnd() {
    Swal.fire ({
      position: "top-end",
      text: "Your work has been saved"
    })
  }
  bottomStart() {
    Swal.fire ({
      position: "bottom-start",
      text: "Your work has been saved"
    })
  }
  bottomEnd() {
    Swal.fire ({
      position: "bottom-end",
      text: "Your work has been saved"
    })
  }
  typeSuccess() {
    Swal.fire ({
      title: "Success",
      text: "You clicked the button!"
    })
  }
  typeInfo() {
    Swal.fire ({
      title: "Info",
      text: "You clicked the button!"
    })
  }
  typeWarning() {
    Swal.fire ({
      title: "Warning",
      text: "You clicked the button!"
    })
  }
  typeError() {
    Swal.fire ({
      title: "Error",
      text: "You clicked the button!"
    })
  }
  confirmText() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
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
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  confirmColor() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: ' btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
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
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  ngOnInit(): void {
  }


}
