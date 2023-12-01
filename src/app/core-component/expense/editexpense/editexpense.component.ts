import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-editexpense',
  templateUrl: './editexpense.component.html',
  styleUrls: ['./editexpense.component.scss']
})
export class EditexpenseComponent implements OnInit {
  public routes = routes;

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }

}
