import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnChanges {
  @Input() tableData = [];

  public tableColumns:any = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['tableData'].currentValue.length) {
      this.genericTableData(this.tableData);
    }
  }

  public genericTableData(tableData: any) {
    this.tableColumns = Object.keys(tableData[0]);
    console.log(this.tableColumns);
  }
}
