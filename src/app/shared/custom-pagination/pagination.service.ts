import { Injectable, EventEmitter } from '@angular/core';
import { CustomPaginationComponent } from './custom-pagination.component';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor() {}
  tablePageSize: BehaviorSubject<tablePageSize> =
    new BehaviorSubject<tablePageSize>({ skip: 0, limit: 10, pageSize: 10 });

  calculatePageSize: BehaviorSubject<pageSizeCal> =
    new BehaviorSubject<pageSizeCal>({
      totalData: 0,
      pageSize: 10,
      tableData: [],
      serialNumberArray: [],
    });
  changePagesize: BehaviorSubject<pageSize> = new BehaviorSubject<pageSize>({
    pageSize: 10,
  });
}
export interface pageSelection {
  skip: number;
  limit: number;
}
export interface tablePageSize {
  skip: number;
  limit: number;
  pageSize: number;
}
export interface pageSizeCal {
  totalData: number;
  pageSize: number;
  tableData: Array<any>;
  serialNumberArray: Array<any>;
}
export interface pageSize {
  pageSize: number;
}
