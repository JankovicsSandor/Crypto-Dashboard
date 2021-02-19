import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectAuthUserGuard } from 'src/guards/redirect-auth-user/redirect-auth-user.guard';

const routes: Routes = [{ path: '', canActivate: [RedirectAuthUserGuard], loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'setting', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) },
{ path: 'exchange', loadChildren: () => import('./pages/exchange/exchange.module').then(m => m.ExchangeModule) },
{ path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
{ path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule) },
{ path: 'support', loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule) },
{ path: 'wallet', loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletModule) },
{ path: 'notification', loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
