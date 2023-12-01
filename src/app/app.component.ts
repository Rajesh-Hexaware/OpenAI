import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SettingsService, SpinnerService } from './core/core.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template';
  public page: string = '';

  constructor(
    private settings: SettingsService,
    private router: Router,
    private spinner: SpinnerService
  ) {


    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        let URL = event.url.split('/');
        this.page = URL[1];
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });
  }
}
