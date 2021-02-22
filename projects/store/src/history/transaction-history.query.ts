import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TransactionHistoryStoreModel } from '@shared';
import { TransactionHistoryStore, } from './transaction-history.store';

@Injectable()
export class TransactionHistoryQuery extends Query<TransactionHistoryStoreModel> {

  constructor(protected store: TransactionHistoryStore) {
    super(store);
  }

  getHistoryItems() {
    return this.select(e => e.history);
  }

}
