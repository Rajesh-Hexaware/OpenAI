import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, routes } from 'src/app/core/core.index';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent implements OnInit {
  public delete: any = [];
  public posPurchase: any = [];
  public posPayment: any = [];
  public posReturn: any = [];
  public cartValue: any = [0, 0, 0, 0];

  customOptions: OwlOptions = {
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoWidth:true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   400: {
    //     items: 2,
    //   },
    // },
    nav: true,
  };

  constructor(private data: DataService) {
    this.data.getPos1().subscribe((res: any) => {
      this.delete = res.data;
      this.posPurchase = res.data;
    });
    this.data.getPos2().subscribe((res: any) => {
      this.posPayment = res.data;
    });
    this.data.getPos3().subscribe((res: any) => {
      this.posReturn = res.data;
    });
  }

  public addPos(i: number): void {
    this.cartValue[i]++;
  }
  public reducePos(i: number): void {
    this.cartValue[i]--;
  }

  confirmText() {}
  confirmTextPurchase(index: any) {}
  confirmTextPayment(index: any) {}
  confirmTextReturn(index: any) {}
  ngOnInit(): void {}
  public sortPosPurchaseData(sort: Sort) {
    const data = this.posPurchase.slice();

    if (!sort.active || sort.direction === '') {
      this.posPurchase = data;
    } else {
      this.posPurchase = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public sortPosPaymentData(sort: Sort) {
    const data = this.posPayment.slice();

    if (!sort.active || sort.direction === '') {
      this.posPayment = data;
    } else {
      this.posPayment = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public sortPosReturnData(sort: Sort) {
    const data = this.posReturn.slice();

    if (!sort.active || sort.direction === '') {
      this.posReturn = data;
    } else {
      this.posReturn = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
}
