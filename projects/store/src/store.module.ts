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



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CryptoDataService, CryptoDataQuery, CryptoDataStore,
    UserProfileQuery, UserProfileService, UserProfileStore, SelectedAssetStore, SelectedAssetQuery, SelectedAssetService],
  exports: []
})
export class StoreModule { }
