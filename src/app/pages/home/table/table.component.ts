import { Component, OnInit } from '@angular/core';
import { CryptoDataQuery } from '@store';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public dataQuery: CryptoDataQuery) { }

  ngOnInit(): void {

  }

}
