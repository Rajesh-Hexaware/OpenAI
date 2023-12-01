import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { routes, SettingsService, SidebarService } from '../core/core.index';
import { WebstorgeService } from '../shared/webstorge.service';

@Component({
  selector: 'app-core-component.',
  templateUrl: './core-component.component.html',
  styleUrls: ['./core-component.component.scss'],
})
export class CoreComponentComponent implements OnInit {
  public sideBaractivePath: boolean = false;
  public darkTheme: boolean = false;
  public changeLayout: string = '1';
  public miniSidebar: boolean = false;
  public expandMenu: boolean = false;
  public mobileSidebar: boolean = false;

  constructor(
    private Router: Router,
    private settings: SettingsService,
    private auth: WebstorgeService,
    private sidebar: SidebarService
  ) {
    this.getRoutes(this.Router);
    this.settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') this.darkTheme = true;
      else this.darkTheme = false;
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
        // <* condition to check mobile side bar position *>
        this.sidebar.toggleMobileSideBar.subscribe((res: any) => {
          if (res == 'true' || res == true) {
            this.mobileSidebar = true;
          } else {
            this.mobileSidebar = false;
          }
        });

    this.sidebar.expandSideBar.subscribe((res: any) => {
      this.expandMenu = res;
    });
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.getRoutes(data);
      }
    });
  }
  ngOnInit(): void {}
  private getRoutes(data: any): void {
    if (
      data.url.split('/')[1] === 'errorpages' ||
      data.url.split('/')[2] === 'pos' ||
      data.url.split('/')[1] === 'auth'
    ) {
      this.sideBaractivePath = true;
    } else {
      this.sideBaractivePath = false;
    }
    if (data.url.split('/')[2] === 'pos') {
      this.sideBaractivePath = true;
    }
    this.sessionOut();
  }

  private sessionOut(): void {
    let loginTime: any = localStorage.getItem('loginTime') || Date();
    // convert to date object and get minutes
    let timeOutMin: number = new Date(loginTime).getMinutes();
    let currentMin: number = new Date().getMinutes();
    let minDiff = timeOutMin - currentMin;
    // session will be closed in 15min from login time
    if (localStorage.getItem('loginTime') && minDiff > 15) {
      this.auth.Logout();
    }
  }
}
