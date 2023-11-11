import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashBoardDataService } from 'src/app/services/dash-board-data.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  constructor(public dashBoardData: DashBoardDataService) {}

  public tableData:any;
  public topCards:any;
  public userData = [];
  public cardIcon = ['fa-solid fa-music','fa-solid fa-chart-pie','fa-solid fa-download','fa-solid fa-arrows-rotate'];
  public data:any;

  public chart1 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 34,5,16,72,83,94,10,11,12,113]
      } as any
    ]
  });
  public chart3 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 34,5,16,72,83,94,10,11,12,113]
      } as any
    ]
  });

  public chart2:any ;

  private createChartColumn(): void {
    let date = new Date();
   this.data = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      this.data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    this.chart2 =  new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text: 'Column Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        title: undefined,
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [{
        name: 'Amount',
        data : this.data,
      }],
    } as any);
  
  }


  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
 

  ngOnInit() {
    this.fetchDashBoardData();
    this.createChartColumn();
  }

  /**
   * fetchDashBoardData functions is to fetch the table, order, user Data.
   *
   */

  public fetchDashBoardData(): void {
    this.dashBoardData.fetchRequiredData().subscribe((data) => {
      if (data) {
        let dataObject = {
          recent_orders: [],
          new_users: [],
          top_cards: [],
        };
        dataObject = Object.assign(data);
        this.tableData = dataObject['recent_orders'].map((item,index)  => {
          let itemObj = Object.assign(item);
          let newObj = {...itemObj , id : String(index + 1).padStart(2, '0')};
          return newObj;
        });
        this.userData = dataObject['new_users'];
        this.topCards = dataObject['top_cards'].map((item,index) => {
          //item.icon = this.cardIcon[index]
          let itemObj = Object.assign(item)
          let newObj = {...itemObj , icon : this.cardIcon[index]}
          
          
          return newObj;
        })  ;
        console.log(this.topCards)
      }
    });
  }
}
