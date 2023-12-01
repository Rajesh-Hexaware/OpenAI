import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-subaddcategory',
  templateUrl: './subaddcategory.component.html',
  styleUrls: ['./subaddcategory.component.scss']
})
export class SubaddcategoryComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
