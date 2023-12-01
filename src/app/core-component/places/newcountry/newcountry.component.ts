import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-newcountry',
  templateUrl: './newcountry.component.html',
  styleUrls: ['./newcountry.component.scss']
})
export class NewcountryComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
