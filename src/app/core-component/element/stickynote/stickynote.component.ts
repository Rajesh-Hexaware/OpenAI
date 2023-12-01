import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-stickynote',
  templateUrl: './stickynote.component.html',
  styleUrls: ['./stickynote.component.scss']
})
export class StickynoteComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
