import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CryptoItem } from '@shared';

@Component({
  selector: 'transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionViewComponent implements OnInit {
  selectedItem: CryptoItem = new CryptoItem();
  transactionForm: FormGroup;

  @Input() set asset(value: CryptoItem | null) {
    if (value) {
      this.selectedItem = value;
    }
  }

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      assetId: [0],
      direction: ["buy"],
      amount: [0, [Validators.min(1)]]
    })
  }

  ngOnInit(): void {
  }

}
