import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-addquotation',
  templateUrl: './addquotation.component.html',
  styleUrls: ['./addquotation.component.scss'],
})
export class AddquotationComponent implements OnInit {
  public routes = routes;
  public tableData = [
    {
      Product: 'Apple Earpods',
      NetUnitPrice: '150',
      Stock: '500',
      Qty: '500',
      Discount: '100',
      Tax: '250',
      Subtotal: '500',
      img: 'assets/img/product/product7.jpg',
    },
    {
      Product: 'Macbook Pro',
      NetUnitPrice: '15.00',
      Stock: '6000.00',
      Qty: '100.00',
      Discount: '0.00',
      Tax: '0.00',
      Subtotal: '1000.00',
      img: 'assets/img/product/product6.jpg',
    },
  ];

  constructor() {}
  date = new Date();
  ngOnInit(): void {}
  delete(index: any) {
    this.tableData.splice(index, 1);
  }
}
