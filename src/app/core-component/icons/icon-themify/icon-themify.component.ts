import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-icon-themify',
  templateUrl: './icon-themify.component.html',
  styleUrls: ['./icon-themify.component.scss'],
})
export class IconThemifyComponent implements OnInit {
  public routes = routes;

  constructor() {}

  ngOnInit(): void {}
}
