import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-form-basic-inputs',
  templateUrl: './form-basic-inputs.component.html',
  styleUrls: ['./form-basic-inputs.component.scss']
})
export class FormBasicInputsComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
