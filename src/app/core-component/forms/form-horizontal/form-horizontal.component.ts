import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-form-horizontal',
  templateUrl: './form-horizontal.component.html',
  styleUrls: ['./form-horizontal.component.scss']
})
export class FormHorizontalComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){}
}
