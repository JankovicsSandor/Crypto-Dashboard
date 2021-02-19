import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneExchangeRoutingModule } from './one-exchange-routing.module';
import { OneExchangeComponent } from './one-exchange.component';


@NgModule({
  declarations: [OneExchangeComponent],
  imports: [
    CommonModule,
    OneExchangeRoutingModule
  ]
})
export class OneExchangeModule { }
