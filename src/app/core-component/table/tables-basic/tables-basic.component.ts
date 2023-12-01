import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-tables-basic',
  templateUrl: './tables-basic.component.html',
  styleUrls: ['./tables-basic.component.scss'],
})
export class TablesBasicComponent implements OnInit {
  public routes = routes;

  constructor() {}

  ngOnInit(): void {}
}
