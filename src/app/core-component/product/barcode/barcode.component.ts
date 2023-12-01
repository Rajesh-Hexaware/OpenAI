import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit {

  public tableData = [
    {
      Name: 'Macbook pro',
      SKU: 'PT001',
      Qty: '100.00',
    },
    {
      Name: 'Apple Earpods',
      SKU: 'PT002',
      Qty: '1000.00',
    },
    {
      Name: 'Macbook Pro',
      SKU: 'PT003',
      Qty: '5000.00',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  delete(index:any)
{
  this.tableData.splice(index, 1);
}
}
