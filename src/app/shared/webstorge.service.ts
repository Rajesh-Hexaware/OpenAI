import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebstorgeService {
  constructor(private router: Router) {}

  /**
   * Login Functionality call from Login
   * @param uservalue from login page
   */
  public Login(uservalue: any): void {
    localStorage.setItem('authorized', uservalue);
    localStorage.setItem('loginTime', Date());
    this.router.navigate(['/dashboard']);
  }

  public Logout(): void {
    localStorage.removeItem('authorized');
    localStorage.removeItem('loginTime');
    this.router.navigate(['/auth/signin']);
  }
}
