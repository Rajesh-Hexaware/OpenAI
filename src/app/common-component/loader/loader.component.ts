import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/core.index';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public spinner: SpinnerService) {}

  loading$ = this.spinner.loading$;

  ngOnInit(): void {
  }

}
