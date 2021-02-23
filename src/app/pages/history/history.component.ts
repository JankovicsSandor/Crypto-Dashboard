import { TransactionHistoryQuery } from '@store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(public transactionHistory: TransactionHistoryQuery) { }

  ngOnInit(): void {
  }

}
