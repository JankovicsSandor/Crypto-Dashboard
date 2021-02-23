import { TransactionHistoryService } from '@store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { HistoryViewComponent } from './history-view/history-view.component';
import { TransactionHistoryDataProviderService } from '@data-provider';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [HistoryComponent, HistoryViewComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatCardModule
  ]
})
export class HistoryModule {
  constructor(private transactionHistoryStore: TransactionHistoryDataProviderService) {
    this.transactionHistoryStore.getTransactionHistoryItems();
  }
}
