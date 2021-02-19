import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [TableComponent, TableViewComponent],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
