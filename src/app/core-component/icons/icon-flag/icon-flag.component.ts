import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-icon-flag',
  templateUrl: './icon-flag.component.html',
  styleUrls: ['./icon-flag.component.scss']
})
export class IconFlagComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
