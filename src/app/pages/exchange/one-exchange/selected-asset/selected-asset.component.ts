import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CryptoDataQuery, SelectedAssetQuery } from '@store';

@Component({
  selector: 'app-selected-asset',
  templateUrl: './selected-asset.component.html',
  styleUrls: ['./selected-asset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedAssetComponent implements OnInit {

  constructor(public selectedAsset: SelectedAssetQuery) { }

  ngOnInit(): void {
  }

}
