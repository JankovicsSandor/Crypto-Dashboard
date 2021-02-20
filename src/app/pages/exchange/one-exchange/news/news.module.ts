import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsViewComponent } from './news-view/news-view.component';



@NgModule({
  declarations: [NewsComponent, NewsViewComponent],
  imports: [
    CommonModule
  ],
  exports: [NewsComponent]
})
export class NewsModule { }
