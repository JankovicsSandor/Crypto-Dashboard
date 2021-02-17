import { HttpClientModule } from '@angular/common/http';
import { TableViewComponent } from './table/table-view/table-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from "@angular/material/table";
import { CryptoDataProviderService } from './table/services/data-provider/crypto-data-provider.service';

@NgModule({
  declarations: [HomeComponent, TableComponent, TableViewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [CryptoDataProviderService]
})
export class HomeModule {
  constructor(private dataProvider: CryptoDataProviderService) {
    this.dataProvider.refreshList();
  }
}