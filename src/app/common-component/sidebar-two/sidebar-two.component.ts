import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SidebarService } from 'src/app/core/core.index';

@Component({
  selector: 'app-sidebar-two',
  templateUrl: './sidebar-two.component.html',
  styleUrls: ['./sidebar-two.component.scss'],
})
export class SidebarTwoComponent implements OnInit {
  opendSubMenu: Array<any> = [];
  public activePath: string = '';
  public sidebarData: Array<any> = [];
  public externalIcons: any = {};
  constructor(private sidebar: SidebarService, private router: Router) {
    this.activePath = this.router.url.split('/')[1];
    this.router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[1];
      }
    });

    this.sidebar.getSideBarData.subscribe((res: any) => {
      this.sidebarData = res;
    });
  }

  ngOnInit(): void {}

  showMenu(val: string): void {
    if (this.opendSubMenu[0] != val) {
      this.opendSubMenu[0] = val;
    } else {
      this.opendSubMenu[0] = '';
    }
  }

  showSubMenu(val: string): void {
    if (this.opendSubMenu[1] != val) {
      this.opendSubMenu[1] = val;
    } else {
      this.opendSubMenu[1] = '';
    }
  }
}
