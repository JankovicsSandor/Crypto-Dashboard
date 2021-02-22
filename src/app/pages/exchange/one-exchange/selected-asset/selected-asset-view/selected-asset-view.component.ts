import { Component, Input, OnInit } from '@angular/core';
import { CryptoItem } from '@shared';

@Component({
  selector: 'selected-asset-view',
  templateUrl: './selected-asset-view.component.html',
  styleUrls: ['./selected-asset-view.component.scss']
})
export class SelectedAssetViewComponent implements OnInit {
  selectedCrpyto: CryptoItem = new CryptoItem();
  totalFiatValue: number = 0;

  @Input() set selectedAsset(crpytoAsset: CryptoItem | null) {
    if (crpytoAsset != null) {
      this.selectedCrpyto = crpytoAsset;
      // TODO remove hardcode
      this.totalFiatValue = crpytoAsset.quote.usd.price * 1000
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
