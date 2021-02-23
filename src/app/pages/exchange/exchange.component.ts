import { Component, OnInit } from '@angular/core';
import { CryptoDataProviderService } from '@data-provider';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  constructor(private dataProvider: CryptoDataProviderService) {
    this.dataProvider.refreshList();
  }

  ngOnInit(): void {
  }
}
