import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
