import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-icon-typicon',
  templateUrl: './icon-typicon.component.html',
  styleUrls: ['./icon-typicon.component.scss'],
})
export class IconTypiconComponent implements OnInit {
  public routes = routes;

  constructor() {}

  ngOnInit(): void {}
}
