import { Component, OnInit } from '@angular/core';
import { SettingsService, SidebarService } from 'src/app/core/core.index';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-sidebar-one',
  templateUrl: './sidebar-one.component.html',
  styleUrls: ['./sidebar-one.component.scss'],
})
export class SidebarOneComponent implements OnInit {
  public activePath: string = '';
  base = 'dashboard';
  page = '';
  public side_bar_data_one: Array<any> = [];

  constructor(private Router: Router, private sidebar: SidebarService) {    
    Router.events.subscribe((event: any) => {      
      if (event instanceof NavigationEnd) {        
        let splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
      }
    });

    // get sidebar data as observable because data is controlled for design to expand submenus
    this.sidebar.getSideBarDataone.subscribe((res: any) => {
      this.side_bar_data_one = res;
    });
  }

  ngOnInit(): void {
    Feather.replace();
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  public expandSubMenus(menu: any): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data_one.map((mainMenus: any) => {
      mainMenus.menu.map((resMenu: any) => {
        // collapse other submenus which are open
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
          if (menu.showSubRoute == false) {
            sessionStorage.removeItem('menuValue');
          }
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
}
