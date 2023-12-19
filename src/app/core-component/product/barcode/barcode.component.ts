import { Component, OnInit } from '@angular/core';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit {
  public routes = routes;
  contentStep=1;
  contentStepfordesign: number = 1;
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
onSubmit() {}
setCurrentStep(step: number): void {
  this.contentStep = step;
}
setCurrentStepfordesign(step: number): void{
  this.contentStepfordesign = step; 
}

copyTextToClipboard(text: string): void {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);  
}
}
