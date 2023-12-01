import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-newstate',
  templateUrl: './newstate.component.html',
  styleUrls: ['./newstate.component.scss']
})
export class NewstateComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
