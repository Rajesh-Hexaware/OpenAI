import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editpurchase',
  templateUrl: './editpurchase.component.html',
  styleUrls: ['./editpurchase.component.scss']
})
export class EditpurchaseComponent implements OnInit {

  public tableData = [
    {
      img:'assets/img/product/product7.jpg',
      ProductName:'Apple Earpods',
      QTY:'10.00',
      PurchasePrice: '2000.00	',
      Discount: '500.00	',
      Tax : '0.00',
      TaxAmount:'0.00',
      UnitCost:'2000.00',
      TotalCost:'2000.00'
    },
    {
      img:'assets/img/product/product6.jpg',
      ProductName:'Macbook Pro',
      QTY:'15.00',
      PurchasePrice: '6000.00	',
      Discount: '100.00	',
      Tax : '0.00',
      TaxAmount:'0.00',
      UnitCost:'1000.00',
      TotalCost:'1000.00'
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
