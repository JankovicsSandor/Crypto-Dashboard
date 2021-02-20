import { OneExchangeRoutingModule } from './one-exchange-routing.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneExchangeComponent } from './one-exchange.component';
import { SelectedAssetModule } from './selected-asset/selected-asset.module';
import { TransactionModule } from './transaction/transaction.module';
import { ChartModule } from './chart/chart.module'

@NgModule({
  declarations: [OneExchangeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SelectedAssetModule,
    OneExchangeRoutingModule,
    TransactionModule,
    ChartModule
  ],
  exports: [OneExchangeComponent]
})
export class OneExchangeModule {
}
