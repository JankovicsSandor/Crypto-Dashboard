import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeComponent } from './exchange.component';

const routes: Routes = [
  { path: ':assetId', loadChildren: () => import('./one-exchange/one-exchange.module').then(m => m.OneExchangeModule) }
  , { path: '', component: ExchangeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRoutingModule { }
