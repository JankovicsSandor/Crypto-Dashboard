import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTransaction, CryptoItem } from '@shared';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionViewComponent implements OnInit {
  selectedItem: CryptoItem = new CryptoItem();
  transactionForm: FormGroup;
  total: BehaviorSubject<number> = new BehaviorSubject(0);

  transactionType$: BehaviorSubject<string> = new BehaviorSubject('buy');

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
      this.total.next(value.amount / this.selectedItem.quote.usd.price);
    })
  }

  ngOnInit(): void {
  }

  setTransactionType(transType: string) {
    this.transactionType$.next(transType);
  }

  createAction() {
    let formValue = this.transactionForm.value;
    let actualValue: CreateTransaction = new CreateTransaction();
    actualValue.orderType = this.transactionType$.getValue();
    actualValue.amount = formValue.amount;
    actualValue.assetId = this.selectedItem.id;

    this.createTransaction.emit(actualValue);
  }

}
