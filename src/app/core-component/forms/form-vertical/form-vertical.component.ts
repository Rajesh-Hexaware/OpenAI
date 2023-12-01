import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-form-vertical',
  templateUrl: './form-vertical.component.html',
  styleUrls: ['./form-vertical.component.scss']
})
export class FormVerticalComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
