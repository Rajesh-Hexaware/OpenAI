import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-icon-simpleline',
  templateUrl: './icon-simpleline.component.html',
  styleUrls: ['./icon-simpleline.component.scss'],
})
export class IconSimplelineComponent implements OnInit {
  public routes = routes;

  constructor() {}

  ngOnInit(): void {}
}
