import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseHttpClientService } from './base-client/base-http-client.service';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule, HttpClientModule],
  providers: [BaseHttpClientService],
  bootstrap: [AppComponent],
})
export class AppModule { }
