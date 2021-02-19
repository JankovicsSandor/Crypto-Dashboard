import { SelectedAssetQuery } from '@store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(public selectedAsset: SelectedAssetQuery) { }

  ngOnInit(): void {
  }

}
