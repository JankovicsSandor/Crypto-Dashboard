import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CryptoItem, CryptoResponse } from '@shared';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() set datasource(value: CryptoResponse | null) {
    if (value != null) {
      this.tableData.data = value.data;
    }
  };

  tableData = new MatTableDataSource(<CryptoItem[]>[]);
  displayedColumns = ["name", "price", "volume", "change24"];
  constructor() { }

  ngOnInit(): void {
  }

}
