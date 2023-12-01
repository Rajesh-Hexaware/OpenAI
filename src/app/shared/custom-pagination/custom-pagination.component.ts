import { Component, OnInit } from '@angular/core';
import {
  pageSelection,
  pageSize,
  pageSizeCal,
  PaginationService,
} from './pagination.service';

@Component({
  selector: 'custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
})
export class CustomPaginationComponent implements OnInit {
  public pageSize: number = 10;
  public tableData: Array<any> = [];
  // pagination variables
  public lastIndex: number = 0;
  public totalData: any = 0;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  //** / pagination variables

  constructor(private pagination: PaginationService) {
    this.tableData = [];
    this.pagination.calculatePageSize.subscribe((res: pageSizeCal) => {
      this.calculateTotalPages(
        res.totalData,
        res.pageSize,
        res.tableData,
        res.serialNumberArray
      );
      this.pageSize = res.pageSize;
    });
    this.pagination.changePagesize.subscribe((res: pageSize) => {
      this.changePageSize(res.pageSize);
    });
  }

  ngOnInit(): void {}

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      // this.getTableData();
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize,
      });
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      // this.getTableData();
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize,
      });
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    // this.getTableData();
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }

  public changePageSize(pageSize: number): void {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    // this.getTableData();
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }

  public calculateTotalPages(
    totalData: number,
    pageSize: number,
    tableData: Array<any>,
    serialNumberArray: Array<any>
  ): void {
    this.tableData = tableData;
    this.pageNumberArray = [];
    this.serialNumberArray = serialNumberArray;
    this.totalData = totalData;
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (var i = 1; i <= this.totalPages; i++) {
      let limit = pageSize * i;
      let skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }
}
