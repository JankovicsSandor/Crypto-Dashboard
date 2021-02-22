import { Injectable } from '@angular/core';
import { TransactionHistory, TransactionHistoryStoreModel } from '@shared';
import { TransactionHistoryStore } from './transaction-history.store';

@Injectable()
export class TransactionHistoryService {

  constructor(private historyStore: TransactionHistoryStore) { }

  updateTransactionHistory(historyItems: TransactionHistory[]) {
    let storeValue = new TransactionHistoryStoreModel();

    storeValue.history = historyItems;
    this.historyStore.update(storeValue);
  }
}
