import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-icon-ionic',
  templateUrl: './icon-ionic.component.html',
  styleUrls: ['./icon-ionic.component.scss']
})
export class IconIonicComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
