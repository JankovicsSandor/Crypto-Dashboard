import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSubscribeDirective } from './ng-subscribe.directive';



@NgModule({
  declarations: [NgSubscribeDirective],
  imports: [
    CommonModule
  ],
  exports: [NgSubscribeDirective]
})
export class DirectiveModule { }
