import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-createpurchasereturn',
  templateUrl: './createpurchasereturn.component.html',
  styleUrls: ['./createpurchasereturn.component.scss'],
})
export class CreatepurchasereturnComponent implements OnInit {
  public routes = routes;
  public tableData = [
    {
      ProductName: 'Apple Earpods',
      NetUnitPrice: '10.00',
      Stock: '2000.00	',
      Qty: '500.00',
      Discount: '0.00',
      Tax: '50',
      Subtotal: '20000.00',
      img: 'assets/img/product/product7.jpg',
    },
    {
      ProductName: 'Macbook Pro',
      NetUnitPrice: '10.00',
      Stock: '2000.00	',
      Qty: '1500.00',
      Discount: '0.00',
      Tax: '150',
      Subtotal: '20000.00',
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
