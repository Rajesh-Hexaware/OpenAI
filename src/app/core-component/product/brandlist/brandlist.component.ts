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
  form: FormGroup;
  labels : FormLabels= {
    productAttributes: 'Origin story, Brand values,Evolution and growth',
    consumerValue: 'Differentiation, Brand personality, Visual and verbal elements',
    brandIdentity: 'Target audience connection, Customer testimonials',
    futureVision: 'Future vision',
    adaptability: 'Adaptability',
    additionalInformation: 'Additional Information'
  };
  formControls = Object.keys(this.labels);
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

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    const formControlsConfig:any = {};
   
    this.formControls.forEach((control,index)=> {
      formControlsConfig[control] = [Object.values(this.labels), Validators.required];
    });

    this.form = this.fb.group(formControlsConfig);
  }



  ngOnInit(): void {
//  console.log("adfsfewwf",this.Origin)
  }



  onSubmit() {    
    let gettingString = `{`+this.Origin+this.Differentiation+this.Target+this.Futurevision+this.Adaptability+this.Additional+`}`;
    const originArray = this.Origin.split(',').map(value => value.trim());
    const jsonObject = { origin: originArray};
    const jsonArray = JSON.stringify(jsonObject);
    console.log('www',jsonArray);

  }

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
