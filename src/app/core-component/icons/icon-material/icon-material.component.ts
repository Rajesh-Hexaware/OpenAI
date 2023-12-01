import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-icon-material',
  templateUrl: './icon-material.component.html',
  styleUrls: ['./icon-material.component.scss']
})
export class IconMaterialComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
