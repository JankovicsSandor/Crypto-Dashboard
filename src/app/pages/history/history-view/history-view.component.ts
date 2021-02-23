import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TransactionHistory } from '@shared';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss']
})
export class HistoryViewComponent implements OnInit {
  transactionHistory: TransactionHistory[] = [];

  @Input()
  set transactionList(list: TransactionHistory[] | null) {
    if (list) {
      this.transactionHistory = list;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
