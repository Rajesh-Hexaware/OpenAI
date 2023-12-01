import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/core/core.index';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  showPreview: boolean = false;
  showNavigation: boolean = false;
  public darkTheme: boolean = false;
  public changeLayout: string = '1';

  constructor(public Settings: SettingsService, private router: Router) {
    this.Settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') this.darkTheme = true;
      else this.darkTheme = false;
    });
    this.Settings.changeLayout.subscribe((res: any) => {
      this.changeLayout = res;
    });
  }

  ngOnInit(): void {}

  public changeTheme(theme: string): void {
    this.Settings.changeTheme.next(theme);
    localStorage.setItem('theme', theme);
  }
  public setRtlFormat(): void {
    window.location.href =
      'https://dreamspos.dreamguystech.com/angular/template-rtl'+this.router.url;
  }
  public setLtrFormat(): void {
    window.location.href =
      'https://dreamspos.dreamguystech.com/angular/template'+this.router.url;
  }
}
