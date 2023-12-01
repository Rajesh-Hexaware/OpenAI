import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  private _currency = new BehaviorSubject<string>('USD');
  public readonly currency$ = this._currency.asObservable();
}
