import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.scss']
})
export class EditbrandComponent implements OnInit {

  show:boolean=false
  constructor() { }

  ngOnInit(): void {
  }


  onCancel(){
  this.show = !this.show
  }

}
