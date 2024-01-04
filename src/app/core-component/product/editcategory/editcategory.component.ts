import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent implements OnInit {
  showDateTimePicker: boolean = false;
  constructor() { }

  ngOnInit(): void {
   

   
  }
  toggleDateTimePicker() {
    // Toggle the value of showDateTimePicker
    this.showDateTimePicker = !this.showDateTimePicker;
  }

}
