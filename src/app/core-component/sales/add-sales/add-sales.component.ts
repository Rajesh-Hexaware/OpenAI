import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent implements OnInit {
  public tableData = [
    {
      Sno:'1',
      ProductName: 'Apple Earpods',
      QTY: '1.00',
      Price: '15000.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      img: 'assets/img/product/product7.jpg',
      },
    {
      Sno:'2',
      ProductName: 'iPhone 11',
      QTY: '1.00',
      Price: '1500.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      img: 'assets/img/product/product8.jpg',
    },
    {
      Sno:'3',
      ProductName: 'Macbook pro',
      QTY: '1.00',
      Price: '1500.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      img: 'assets/img/product/product1.jpg',
    },
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
