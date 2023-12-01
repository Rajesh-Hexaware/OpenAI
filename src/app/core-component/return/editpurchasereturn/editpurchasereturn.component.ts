import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-editpurchasereturn',
  templateUrl: './editpurchasereturn.component.html',
  styleUrls: ['./editpurchasereturn.component.scss']
})
export class EditpurchasereturnComponent implements OnInit {
  public routes = routes;
  public tableData = [
    {
      img:'assets/img/product/product7.jpg',
      ProductName:'Apple Earpods',
      NetUnitPrice:'10.00',
      Stock: '2000.00	',
      QTY: '500.00	',
      Discount: '0.00',
      Tax:'50',
      Subtotal:'20000.00',
    },
    {
      img:'assets/img/product/product6.jpg',
      ProductName:'Macbook Pro',
      NetUnitPrice:'10.00',
      Stock: '2000.00	',
      QTY: '1500.00	',
      Discount: '0.00',
      Tax:'150',
      Subtotal:'20000.00',
    }
  ]

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }
  delete(index:any)
  {
    this.tableData.splice(index, 1);
  }
}
