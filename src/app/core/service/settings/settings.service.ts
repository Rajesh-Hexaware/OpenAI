import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public changeTheme: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('theme') || 'light'
  );
  public changeLayout: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('changeLayout') || '1'
  );
  constructor() {}
  public setLayout(value: string) {
    this.changeLayout.next(value);
    localStorage.setItem('changeLayout', value);
  }
}
