import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/core/helpers/routes';
import { WebstorgeService } from 'src/app/shared/webstorge.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public routes = routes;
  password: any;
  show = false;
  public CustomControler: any;
  form = new FormGroup({
    email: new FormControl('user@dreamguystech.com', [Validators.required]),
    password: new FormControl('12345', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private storage: WebstorgeService) {}

  ngOnInit() {
    this.password = 'password';
  }

  submit() {
    if (this.form.valid) {
      this.storage.Login(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  ngOnDestroy() {}

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
