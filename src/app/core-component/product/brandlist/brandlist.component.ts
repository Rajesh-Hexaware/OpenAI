import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import jsonDoc from 'src/app/shared/dosc/docs';

import { Router } from '@angular/router';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ObjectDataService } from 'src/app/core/service/data/objectdata.service';
interface FormLabels {
  [key: string]: string;
}
@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.scss'],
})
export class BrandlistComponent implements OnInit {
  public routes = routes;
  contentStep = 1;
  contentStepfordesign: number = 1;
  
  Origin: string = `Origin-story :

Brand-values :

Evolution-and-growth :`;
Differentiation: string = `Differentiation:

Brand-personality:

Visual-and-verbal-elements:`;
Target: string = `Target-audience-connection:

Customer-testimonials:`;
Futurevision: string = `Future-vision:`;
Adaptability: string = `Adaptability:`;
Additional: string = `Additional-Information:`;
newLine: any =`\n`;

  constructor(
    private router: Router,
    private globalObject:ObjectDataService
  ) {

  }



  ngOnInit(): void {
  }



  onSubmit() {   
    
    let gettingString = `${this.Origin}${this.newLine}${this.Differentiation}${this.newLine}${this.Target}${this.newLine}${this.Futurevision}${this.newLine}${this.Adaptability}${this.newLine}${this.Additional}`;
       this.globalObject.convertToJSON(gettingString);
  }


  // private convertToKeyValuePairs(data: any)  {
  //   const formDataKeyValue =  Object.keys(data).map((key) => ({
  //     key: key,
  //     value: data[key],
  //   }));
  //   this.convertToJSON(formDataKeyValue);
  // }

  // private convertToJSON(keyValuePairs: any[]) {
  //   let jsonData: any = {};
  //    jsonData = keyValuePairs.forEach((pair) => {
  //     jsonData[pair.key] = pair.value;
  //   });
  //   console.log('www',jsonData);
  // }
  setCurrentStep(step: number): void {
    this.contentStep = step;
  }
  setCurrentStepfordesign(step: number): void {
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
