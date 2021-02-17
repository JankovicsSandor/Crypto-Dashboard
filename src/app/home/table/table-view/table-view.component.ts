import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CryptoItem, CryptoResponse } from '../../../models/crypto-response';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() set datasource(value: CryptoResponse) {
    this.tableData.data = value.data;
  };

  tableData = new MatTableDataSource(<CryptoItem[]>[]);
  displayedColumns = ["name", "price", "change24", "change7d", "marketCap"];
  constructor() { }

  ngOnInit(): void {
  }

}
