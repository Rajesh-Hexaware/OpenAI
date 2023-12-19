import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-salesreturnlists',
  templateUrl: './salesreturnlists.component.html',
  styleUrls: ['./salesreturnlists.component.scss'],
})
export class SalesreturnlistsComponent implements OnInit {
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
  contentStep=1;
  contentStepfordesign: number = 1; 
  //** / pagination variables
  constructor(private data: DataService, private sweetalert: SweetalertService) {
    this.data.getSalesReturnList().subscribe((res: any) => {
      this.tableData = res.data;
    });
  }
  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  deleteBtn() {
    this.sweetalert.deleteBtn()
  }
  date = new Date();
  ngOnInit(): void {}
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
    onSubmit(){
      
    }
}
