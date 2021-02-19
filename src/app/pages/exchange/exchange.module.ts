import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange.component';
import { TableModule } from "@ui-view"
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ExchangeComponent],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    TableModule,
    MatCardModule
  ]
})
export class ExchangeModule {
}
