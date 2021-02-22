import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedAssetComponent } from './selected-asset.component';
import { SelectedAssetViewComponent } from './selected-asset-view/selected-asset-view.component';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [SelectedAssetComponent, SelectedAssetViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    PipesModule
  ],
  exports: [SelectedAssetComponent]
})
export class SelectedAssetModule { }
