import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../core/core.index';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public darkTheme: boolean = false;

  constructor(private router: Router, private settings: SettingsService) {
    this.settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') this.darkTheme = true;
      else this.darkTheme = false;
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('authorized')) {
      this.router.navigate(['/dashboard']);
    }
  }
}
