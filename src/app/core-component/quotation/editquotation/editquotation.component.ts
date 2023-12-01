import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-editquotation',
  templateUrl: './editquotation.component.html',
  styleUrls: ['./editquotation.component.scss']
})
export class EditquotationComponent implements OnInit {
  public routes = routes;
  public tableData = [
    {
      img:'assets/img/product/product7.jpg',
      ProductName:'Apple Earpods',
      NetUnitPrice:'150',
      Stock: '500	',
      QTY: '500	',
      Discount: '100',
      Tax:'250',
      Subtotal:'500',
    },
    {
      img:'assets/img/product/product6.jpg',
      ProductName:'Macbook Pro',
      NetUnitPrice:'15.00',
      Stock: '6000.00	',
      QTY: '100.00	',
      Discount: '0.00',
      Tax:'0.00',
      Subtotal:'1000.00',
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
