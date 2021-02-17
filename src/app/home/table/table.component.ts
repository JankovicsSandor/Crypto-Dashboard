import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CryptoResponse } from './models/crypto-response';
import { CryptoBusinessLogicService } from './services/bussiness-logic/crypto-business-logic.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public cryptoLogic: CryptoBusinessLogicService) { }

  ngOnInit(): void {

  }

}
