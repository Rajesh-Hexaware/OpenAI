import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-createsalesreturns',
  templateUrl: './createsalesreturns.component.html',
  styleUrls: ['./createsalesreturns.component.scss']
})
export class CreatesalesreturnsComponent implements OnInit {
  public routes = routes;
  public tableData = [
    {
      ProductName: 'Apple Earpods',
      NetUnitPrice: '150',
      Stock: '500',
      QTY: '500',
      Discount: '100',
      Tax : '50',
      Subtotal : '250',
      img: "assets/img/product/product7.jpg",
    },
    {
      ProductName: 'Macbook Pro',
      NetUnitPrice: '150',
      Stock: '500',
      QTY: '500',
      Discount: '100',
      Tax : '50',
      Subtotal : '250',
      img: "assets/img/product/product6.jpg",
    }]

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }
delete(index:any)
{
  this.tableData.splice(index, 1);
}
}
