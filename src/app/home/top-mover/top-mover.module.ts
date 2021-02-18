import { TopMoverComponent } from './top-mover/top-mover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCryptoMoverService } from './services/bussiness-logic/top-crypto-mover.service';
import { TopMoverViewComponent } from './top-mover/top-mover-view/top-mover-view.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TopMoverComponent, TopMoverViewComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [
    TopCryptoMoverService
  ],
  exports: [TopMoverComponent]
})
export class TopMoverModule { }
