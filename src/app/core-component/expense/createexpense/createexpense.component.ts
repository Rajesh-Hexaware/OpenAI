import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-createexpense',
  templateUrl: './createexpense.component.html',
  styleUrls: ['./createexpense.component.scss']
})
export class CreateexpenseComponent implements OnInit {
  public routes = routes;

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }

}
