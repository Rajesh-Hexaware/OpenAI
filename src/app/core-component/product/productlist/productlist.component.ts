import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OpenaiService } from 'src/app/core/service/data/openai.service';
import {
  apiResultFormat,
  DataService,
  pageSelection,
  routes,
} from 'src/app/core/core.index';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  contentStep=1;
  contentStepfordesign: number = 1;
  initChecked: boolean = false;
  public tableData: Array<any> = [];
  public routes = routes;
  // pagination variables
  public pageSize: number = 10;
  public serialNumberArray: Array<any> = [];
  public totalData: any = 0;
  showFilter: boolean = false;
  dataSource!: MatTableDataSource<any>;
  public searchDataValue = '';
  formData: any = {};
  prompt: string = '';
  generatedText: any;
  message: any;
  currentStep = 1;
  totalSteps = 3;
  submitted = false;
  selectedSeats: number = 1;
  productformValue!: FormGroup;
  sectionTwo!: FormGroup;
  sectionThree!: FormGroup;
  industries: string[] = [
    'Technology',
    'Healthcare',
    'Finance',
    'Automotive',
    'Retail',
    'Telecommunications',
    'Energy',
    'Education',
    'Entertainment',
    'Agriculture',
    'Manufacturing',
    'Construction',
    'Hospitality',
    'Pharmaceuticals',
    'Transportation',
    'Media',
    'Real Estate',
    'Aerospace',
    'Biotechnology',
    'Environmental'
    // Add more industries as needed
  ];
  geography: string[] = [
    'Afghanistan', 'Algeria', 'Angola', 'Argentina', 'Bangladesh', 'Brazil', 'Canada', 'China', 'Colombia', 'Congo (DR)', 'Egypt', 'Ethiopia', 'France', 'Germany', 'Ghana', 'India', 'Indonesia', 'Iran', 'Iraq', 'Italy', 'Japan', 'Kenya', 'Malaysia', 'Mexico', 'Morocco', 'Mozambique', 'Myanmar', 'Nepal', 'Nigeria', 'Pakistan', 'Peru', 'Philippines', 'Poland', 'Russia', 'Saudi Arabia', 'South Africa', 'South Korea', 'Spain', 'Sudan', 'Tanzania', 'Thailand', 'Turkey', 'Ukraine', 'Uganda', 'United Kingdom', 'United States', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen'

  ];
  selectedIndustry: string = '';
  selectedgeography: string = '';
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private sweetlalert: SweetalertService,
    private router: Router,
    private openaiService: OpenaiService,  private formBuilder: FormBuilder
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.productList) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    this.productformValue = this.formBuilder.group({
      passengerName: ['', Validators.required],  
      email: ['', [Validators.required, Validators.email]],
      dob: [''],  
    });
    this.sectionTwo = this.formBuilder.group({      
      numberOfTickets: ['', [Validators.required, Validators.min(1)]],
       mealPreference: [''],
       ticketClass: [''],
    });
    this.sectionThree = this.formBuilder.group({      
     
     additionalComments: ['', Validators.required],
     attachment: [''],
    //  seats: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
     password: ['', Validators.required]
   });
  }
  get f() {
    return this.productformValue.controls;    
  }
  get s() {
    return this.sectionTwo.controls;
  }
 
  get t() {
    return this.sectionThree.controls;
  }
  generateText(string:any) {    
    this.openaiService.generateText(string).subscribe(
      (response:any) => {    
        debugger  
        this.generatedText =  response.choices[0].message.content;      
        this.message = response.choices[0].message.content;
        console.log(response.choices[0].message.content);
        console.log(response.choices[0].text);
 
      },
      (error:any) => {
        console.error('Error:', error);
      }
    );
  }
  exportToCsv() {  
    const dataForCsv = [{ message: this.message }];
    this.openaiService.downloadCsv(dataForCsv, 'exported-file');
  }
 
  nextStep() {
    this.submitted =true;
 
    if (this.currentStep === 1 && this.productformValue.valid) {
      this.currentStep++;
    } else if (this.currentStep === 2 && this.sectionTwo.valid) {
      this.currentStep++;
    } else if (this.currentStep === 3 && this.sectionThree.valid) {
      this.currentStep++;
    }
    //  if (this.currentStep < this.totalSteps) {
    //   this.currentStep++;
    // }
   
  }
 
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  deleteBtn() {
    this.sweetlalert.deleteBtn();
  }
  ngOnInit(): void {}

  private getTableData(pageOption: pageSelection): void {
    this.data.getProductList().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f: any) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f: any) => {
        f.isSelected = false;
      });
    }
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

onSubmit(): void {
  const newData = {
    'industry': this.selectedgeography,
    'geography': this.selectedgeography,
  };
  this.data.updateData(newData);
}
}
