import { NewsService } from './crypto-news/news.service';
import { NewsStore } from './crypto-news/news.store';
import { SelectedAssetService } from './selected-asset/selected-asset.service';
import { SelectedAssetQuery } from './selected-asset/selected-asset.query';
import { UserProfileStore } from './user-profile/user-profile.store';
import { UserProfileService } from './user-profile/user-profile.service';
import { UserProfileQuery } from './user-profile/user-profile.query';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoDataService } from './crypto-data/crypto-data.service';
import { CryptoDataQuery } from './crypto-data/crypto-data.query';
import { CryptoDataStore } from './crypto-data/crypto-data.store';
import { SelectedAssetStore } from './selected-asset/selected-asset.store';
import { NewsQuery } from './crypto-news';
import { TransactionHistoryQuery, TransactionHistoryService } from './history';
import { TransactionHistoryStore } from './history/transaction-history.store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CryptoDataService, CryptoDataQuery, CryptoDataStore,
    UserProfileQuery, UserProfileService, UserProfileStore,
    NewsStore, NewsQuery, NewsService,
    TransactionHistoryService, TransactionHistoryQuery, TransactionHistoryStore,
    SelectedAssetStore, SelectedAssetQuery, SelectedAssetService],
  exports: []
})
export class StoreModule { }
