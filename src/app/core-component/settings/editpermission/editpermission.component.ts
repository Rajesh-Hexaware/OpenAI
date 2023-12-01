import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-editpermission',
  templateUrl: './editpermission.component.html',
  styleUrls: ['./editpermission.component.scss'],
})
export class EditpermissionComponent implements OnInit {
  public Permission: any = [];
  public commonSelect: boolean = false;
  constructor(private data: DataService) {
    this.data.getEditPermission().subscribe((res: any) => {
      this.Permission = res.data;
    });
  }

  ngOnInit(): void {}

  public selectAll(): void {
    if (this.commonSelect === false) {
      this.Permission.forEach((f: any) => {
        f.View = true;
        f.Create = true;
        f.Edit = true;
        f.Delete = true;
        f.ViewAllRecords = true;
        f.Barcode = true;
        f.SelectAll = true;
      });
    } else if (this.commonSelect === true) {
      this.Permission.forEach((f: any) => {
        f.View = false;
        f.Create = false;
        f.Edit = false;
        f.Delete = false;
        f.ViewAllRecords = false;
        f.Barcode = false;
        f.SelectAll = false;
      });
    }
  }

  public selectOne(editpermission: any, status: boolean): void {
    if (status === false) {
      this.Permission[editpermission].View = true;
      this.Permission[editpermission].Create = true;
      this.Permission[editpermission].Edit = true;
      this.Permission[editpermission].Delete = true;
      this.Permission[editpermission].ViewAllRecords = true;
      this.Permission[editpermission].Barcode = true;
    } else if (status === true) {
      this.Permission[editpermission].View = false;
      this.Permission[editpermission].Create = false;
      this.Permission[editpermission].Edit = false;
      this.Permission[editpermission].Delete = false;
      this.Permission[editpermission].ViewAllRecords = false;
      this.Permission[editpermission].Barcode = false;
    }
  }
}
