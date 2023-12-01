import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-form-input-groups',
  templateUrl: './form-input-groups.component.html',
  styleUrls: ['./form-input-groups.component.scss']
})
export class FormInputGroupsComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
