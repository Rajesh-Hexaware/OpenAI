import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';
import { CommonService } from 'src/app/core/core.index';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive | any;
  colors: any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
};
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public routes = routes;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public currency!: string;
  public recentlyAddedProducts = [
    {
      Sno: '1',
      img: 'assets/img/product/product22.jpg',
      Products: 'Apple Earpods',
      Price: 899,
    },
    {
      Sno: '2',
      img: 'assets/img/product/product23.jpg',
      Products: 'iPhone 11',
      Price: 668.51,
    },
    {
      Sno: '3',
      img: 'assets/img/product/product24.jpg',
      Products: 'samsung',
      Price: 5,
    },
    {
      Sno: '4',
      img: 'assets/img/product/product6.jpg',
      Products: 'Macbook Pro',
      Price: 29.01,
    },
  ];

  public expiredProducts = [
    {
      SNo: '1',
      ProductCode: 'IT0001',
      ProductName: 'Orange',
      img: 'assets/img/product/product2.jpg',
      BrandName: 'N/D',
      CategoryName: 'Fruits',
      ExpiryDate: '12-12-2022',
    },
    {
      SNo: '2',
      ProductCode: 'IT0002',
      ProductName: 'Pineapple',
      img: 'assets/img/product/product3.jpg',
      BrandName: 'N/D',
      CategoryName: 'Fruits',
      ExpiryDate: '25-11-2022',
    },
    {
      SNo: '3',
      ProductCode: 'IT0003',
      ProductName: 'Stawberry',
      img: 'assets/img/product/product4.jpg',
      BrandName: 'N/D',
      CategoryName: 'Fruits',
      ExpiryDate: '19-11-2022',
    },
    {
      SNo: '4',
      ProductCode: 'IT0004',
      ProductName: 'Avocat',
      img: 'assets/img/product/product5.jpg',
      BrandName: 'N/D',
      CategoryName: 'Fruits',
      ExpiryDate: '20-11-2022',
    },
  ];

  constructor(private common: CommonService) {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          color: '#EA5455',
          data: [50, 45, 60, 70, 50, 45, 60, 70],
        },
        {
          name: 'Purchase',
          color: '#28C76F',
          data: [-21, -54, -45, -35, -21, -54, -45, -35],
        },
      ],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },
      
      responsive: {
        breakpoint: 280,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0,
          },
        },
      },
      plotOptions: {
        area: {
          fillTo: 'end',
        },
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 7,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          distributed: true,
          colors: {
            ranges: [
              {
                from: 0,
                to: 100000,
                color: '#28C76F',
              },
              {
                from: -100000,
                to: 0,
                color: '#EA5455',
              },
            ],
          },
        },
      },
      xaxis: {
        categories: [
          ' Jan ',
          'feb',
          'march',
          'april',
          'may',
          'june',
          'july',
          'auguest',
        ],
      },

      legend: {
        position: 'right',
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    };

    this.common.currency$.subscribe((res: string) => {
      this.currency = res;
    });
  }

  ngOnInit(): void {}

  public sortRecentlyAddedProducts(sort: Sort) {
    const data = this.recentlyAddedProducts.slice();

    if (!sort.active || sort.direction === '') {
      this.recentlyAddedProducts = data;
    } else {
      this.recentlyAddedProducts = data.sort((a: any, b: any) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public sortExpiredProducts(sort: Sort) {
    const data = this.expiredProducts.slice();

    if (!sort.active || sort.direction === '') {
      this.expiredProducts = data;
    } else {
      this.expiredProducts = data.sort((a: any, b: any) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
}
