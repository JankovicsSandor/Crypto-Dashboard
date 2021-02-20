import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartViewComponent } from './chart-view/chart-view.component';



@NgModule({
  declarations: [ChartComponent, ChartViewComponent],
  imports: [
    CommonModule
  ],
  exports: [ChartComponent]
})
export class ChartModule { }
