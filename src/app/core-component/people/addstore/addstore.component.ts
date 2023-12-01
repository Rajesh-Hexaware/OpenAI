import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.component.html',
  styleUrls: ['./addstore.component.scss']
})
export class AddstoreComponent implements OnInit {
  password= 'password';
  show = false;
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }


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
