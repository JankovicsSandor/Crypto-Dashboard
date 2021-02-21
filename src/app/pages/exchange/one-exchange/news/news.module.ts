import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [NewsComponent, NewsViewComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [NewsComponent]
})
export class NewsModule { }
