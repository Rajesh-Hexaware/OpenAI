import { Component, OnInit } from '@angular/core';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
@Component({
  selector: 'app-importpurchase',
  templateUrl: './importpurchase.component.html',
  styleUrls: ['./importpurchase.component.scss']
})
export class ImportpurchaseComponent implements OnInit {
  contentStep=1;
  contentStepfordesign: number = 1;
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

  


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
  onSubmit(){
    
  }

}
