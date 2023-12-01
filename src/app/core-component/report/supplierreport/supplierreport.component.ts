import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';

@Component({
  selector: 'app-supplierreport',
  templateUrl: './supplierreport.component.html',
  styleUrls: ['./supplierreport.component.scss'],
})
export class SupplierreportComponent implements OnInit {
  public purchaseData: any = [];
  public paymentData: any = [];
  public returnData: any = [];
  public tableData: Array<any> = [];
  purchaseInitChecked: boolean = false;
  paymentInitChecked: boolean = false;
  returnInitChecked: boolean = false;
  public routes = routes;
  // pagination variables
  public pageSize: number = 10;
  public serialNumberArray: Array<any> = [];
  public totalData: any = 0;
  showFilter: boolean = false;
  showFilters: boolean = false;
  showFilte: boolean = false;
  dataSource!: MatTableDataSource<any>;
  public searchDataValue = '';
  //** / pagination variables
  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.data.getSupplierReport1().subscribe((res: any) => {
      this.purchaseData = res.data;
    });
    this.data.getSupplierReport2().subscribe((res: any) => {
      this.paymentData = res.data;
    });
    this.data.getSupplierReport3().subscribe((res: any) => {
      this.returnData = res.data;
    });
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.supplierReport) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  date = new Date();
  ngOnInit(): void {}

  private getTableData(pageOption: pageSelection): void {
    this.data.getSupplierReport1().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public sortPurchaseData(sort: Sort) {
    const data = this.purchaseData.slice();

    if (!sort.active || sort.direction === '') {
      this.purchaseData = data;
    } else {
      this.purchaseData = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public sortPaymentData(sort: Sort) {
    const data = this.purchaseData.slice();

    if (!sort.active || sort.direction === '') {
      this.purchaseData = data;
    } else {
      this.purchaseData = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public sortReturnData(sort: Sort) {
    const data = this.purchaseData.slice();

    if (!sort.active || sort.direction === '') {
      this.purchaseData = data;
    } else {
      this.purchaseData = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  purchaseSelectAll(initChecked: boolean) {
    if (!initChecked) {
      this.purchaseData.forEach((f: any) => {
        f.isSelected = true;
      });
    } else {
      this.purchaseData.forEach((f: any) => {
        f.isSelected = false;
      });
    }
  }
  paymentSelectAll(initChecked: boolean) {
    if (!initChecked) {
      this.paymentData.forEach((f: any) => {
        f.isSelected = true;
      });
    } else {
      this.paymentData.forEach((f: any) => {
        f.isSelected = false;
      });
    }
  }
  returnSelectAll(initChecked: boolean) {
    if (!initChecked) {
      this.returnData.forEach((f: any) => {
        f.isSelected = true;
      });
    } else {
      this.returnData.forEach((f: any) => {
        f.isSelected = false;
      });
    }
  }
}
