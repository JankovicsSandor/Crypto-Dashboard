import { TableViewComponent } from './table/table-view/table-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TableComponent } from './table/table.component';
import { MatTableModule } from "@angular/material/table";
import { TopMoverModule } from './top-mover/top-mover.module';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '../../pipes/pipes.module';
import { CryptoDataProviderService } from "@data-provider"
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, TableComponent, TableViewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    TopMoverModule,
    MatCardModule,
    PipesModule
  ],
  providers: []
})
export class DashboardModule {
  constructor(private dataProvider: CryptoDataProviderService) {
    this.dataProvider.refreshList();
  }
}
