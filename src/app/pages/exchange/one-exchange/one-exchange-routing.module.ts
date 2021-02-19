import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneExchangeComponent } from './one-exchange.component';

const routes: Routes = [{ path: '', component: OneExchangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneExchangeRoutingModule { }
