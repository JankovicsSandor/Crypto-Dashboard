import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DataProviderModule } from '@data-provider';
import { StoreModule } from '@store';
import { HomeModule } from './pages/home/home.module';
import { RedirectAuthUserGuard } from 'src/guards/redirect-auth-user/redirect-auth-user.guard';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule,
    MatIconModule, MatListModule,
    AppRoutingModule, MatExpansionModule,
    StoreModule, DataProviderModule, MatSidenavModule, HomeModule],
  providers: [RedirectAuthUserGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
