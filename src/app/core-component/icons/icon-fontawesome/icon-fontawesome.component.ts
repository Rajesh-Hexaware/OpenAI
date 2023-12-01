import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-icon-fontawesome',
  templateUrl: './icon-fontawesome.component.html',
  styleUrls: ['./icon-fontawesome.component.scss']
})
export class IconFontawesomeComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
