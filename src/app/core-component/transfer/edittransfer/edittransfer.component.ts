import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-edittransfer',
  templateUrl: './edittransfer.component.html',
  styleUrls: ['./edittransfer.component.scss']
})
export class EdittransferComponent implements OnInit {
  public routes = routes;
  public tableData = [
    {
      img:'assets/img/product/product7.jpg',
      ProductName:'Apple Earpods',
      QTY:'1',
      Price: '1500.00	',
      Stock: '50.00	',
      Discount: '0.00',
      Tax:'0.00',
      TotalCost:'1500.00',
    }]

  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }
  delete(index:any)
  {
    this.tableData.splice(index, 1);
  }
}
