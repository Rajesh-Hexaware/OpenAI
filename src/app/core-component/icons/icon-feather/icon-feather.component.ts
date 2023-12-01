import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-icon-feather',
  templateUrl: './icon-feather.component.html',
  styleUrls: ['./icon-feather.component.scss']
})
export class IconFeatherComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
