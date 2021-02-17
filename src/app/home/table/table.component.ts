import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CryptoDataQuery } from 'src/app/store/crypto-data/crypto-data.query';
import { CryptoResponse } from '../../models/crypto-response';

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
