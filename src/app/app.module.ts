import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseHttpClientService } from './base-client/base-http-client.service';
import { StoreModule } from './store/store.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, AppRoutingModule, MatExpansionModule, StoreModule, HttpClientModule, MatSidenavModule],
  providers: [BaseHttpClientService],
  bootstrap: [AppComponent],
})
export class AppModule { }
