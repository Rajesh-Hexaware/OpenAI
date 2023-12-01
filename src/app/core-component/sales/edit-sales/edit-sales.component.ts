import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-sales',
  templateUrl: './edit-sales.component.html',
  styleUrls: ['./edit-sales.component.scss']
})
export class EditSalesComponent implements OnInit {

  public tableData = [
    {
      Sno:'1',
      img:'assets/img/product/product7.jpg',
      ProductName: 'Apple Earpods',
      QTY: '1.00',
      Price: '15000.00',
      Discount:'0.00',
      Tax:'0.00',
      Subtotal:'1500.00',
    },
    {
      Sno:'2',
      img:'assets/img/product/product8.jpg',
      ProductName: 'iPhone 11',
      QTY: '1.00',
      Price: '1500.00',
      Discount:'0.00',
      Tax:'0.00',
      Subtotal:'1500.00',
    },
    {
      Sno:'3',
      img:'assets/img/product/product1.jpg',
      ProductName: 'Macbook pro',
      QTY: '1.00',
      Price: '1500.00',
      Discount:'0.00',
      Tax:'0.00',
      Subtotal:'1500.00',
    }
  
  ]

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }

}
