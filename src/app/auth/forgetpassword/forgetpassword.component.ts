import { Component, OnInit } from '@angular/core';
import { routes } from '../../core/core.index';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent implements OnInit {
  public routes = routes;

  constructor() {}

  ngOnInit(): void {}
}
