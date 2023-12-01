import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-form-fileupload',
  templateUrl: './form-fileupload.component.html',
  styleUrls: ['./form-fileupload.component.scss']
})
export class FormFileuploadComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }



}
