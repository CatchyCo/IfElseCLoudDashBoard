import { Component, OnInit } from '@angular/core';
import { DashBoardDataService } from 'src/app/services/dash-board-data.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  constructor(public dashBoardData: DashBoardDataService) {}

  public tableData = [];
  public topCards = [];
  public userData = [];

  ngOnInit() {
    this.fetchDashBoardData();
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
        this.tableData = dataObject['recent_orders'];
        this.userData = dataObject['new_users'];
        this.topCards = dataObject['top_cards'];
      }
    });
  }
}
