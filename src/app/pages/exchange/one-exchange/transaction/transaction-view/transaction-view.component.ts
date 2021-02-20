import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTransaction, CryptoItem } from '@shared';
import { debounceTime } from 'rxjs/operators';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss']
})
export class TransactionViewComponent implements OnInit {
  selectedItem: CryptoItem = new CryptoItem();
  transactionForm: FormGroup;
  total: number;

  transactionType: 'buy' | 'sell' = "buy";

  @Output() createTransaction: EventEmitter<CreateTransaction> = new EventEmitter();

  @Input() set asset(value: CryptoItem | null) {
    if (value) {
      this.selectedItem = value;
    }
  }
  // TODO add validity check

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      amount: [0, [Validators.min(1)]]
    })

    this.transactionForm.valueChanges.pipe(debounceTime(100)).subscribe((value) => {
      this.total = value.amount / this.selectedItem.quote.usd.price;
    })

    this.total = 0;
  }

  ngOnInit(): void {
  }

  setTransactionType(tabchangeEvent: MatTabChangeEvent) {
    if (tabchangeEvent.index == 0) {
      this.transactionType = "buy"
    } else {
      this.transactionType = "sell"
    }
  }

  createAction() {
    let formValue = this.transactionForm.value;
    let actualValue: CreateTransaction = new CreateTransaction();
    actualValue.orderType = this.transactionType;
    actualValue.amount = formValue.amount;
    actualValue.assetId = this.selectedItem.id;

    this.createTransaction.emit(actualValue);
  }

}
