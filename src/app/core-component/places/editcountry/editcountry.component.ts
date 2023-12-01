import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-editcountry',
  templateUrl: './editcountry.component.html',
  styleUrls: ['./editcountry.component.scss']
})
export class EditcountryComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
