import { TableModule } from './table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMoverModule } from './top-mover/top-mover.module';
import { MatCardModule } from '@angular/material/card';
import { CryptoDataProviderService } from "@data-provider"
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TopMoverModule,
    MatCardModule,
    TableModule
  ],
  providers: []
})
export class DashboardModule {
  constructor(private dataProvider: CryptoDataProviderService) {
    this.dataProvider.refreshList();
  }
}
