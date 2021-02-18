import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoDataService } from './crypto-data/crypto-data.service';
import { CryptoDataQuery } from './crypto-data/crypto-data.query';
import { CryptoDataStore } from './crypto-data/crypto-data.store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CryptoDataService, CryptoDataQuery, CryptoDataStore],
  exports: []
})
export class StoreModule { }
