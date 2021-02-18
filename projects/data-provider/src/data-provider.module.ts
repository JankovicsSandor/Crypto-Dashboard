import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CryptoDataProviderService } from '@data-provider';
import { BaseHttpClientService } from "./base-client/base-http-client.service"


@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [HttpClientModule, BaseHttpClientService, CryptoDataProviderService],
  exports: [HttpClientModule]
})
export class DataProviderModule { }
