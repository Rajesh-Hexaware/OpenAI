import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit {
  public routes = routes;
  copyFromInput: any = 'http://www.admin-dashboard.com';

  constructor() { }

  ngOnInit(): void {
  }

}
