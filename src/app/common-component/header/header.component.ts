import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SettingsService, SidebarService } from 'src/app/core/core.index';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
import { routes } from 'src/app/core/helpers/routes';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public routes = routes;
  activePath = '';
  showSearch: boolean = false;
  public changeLayout: string = '1';
  public darkTheme: boolean = false;
  public logoPath: string = '';
  public miniSidebar: boolean = false;
  elem=document.documentElement

  constructor(
    private Router: Router,
    private settings: SettingsService,
    private sidebar: SidebarService,
    private webStorage: WebstorgeService
  ) {
    this.activePath = this.Router.url.split('/')[2];
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[2];
      }
    });
    this.settings.changeLayout.subscribe((res: any) => {
      this.changeLayout = res;
    });
    this.sidebar.sideBarPosition.subscribe((res: any) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') {
        this.darkTheme = true;
        this.logoPath = 'assets/img/logo-white.png';
      } else {
        this.darkTheme = false;
        // this.logoPath = 'assets/img/logo.png';
        this.logoPath = 'assets/img/dreams.png';
      }
    });
  }

  ngOnInit(): void {
    Feather.replace();
  }

  public logout(): void {
    this.webStorage.Logout();
  }

  public toggleSidebar(): void {
    this.sidebar.switchSideMenuPosition();
  }

  public togglesMobileSideBar(): void {
    this.sidebar.switchMobileSideBarPosition();
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  fullscreen() {
    if(!document.fullscreenElement) {
      this.elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }
}
