import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedAssetComponent } from './selected-asset.component';
import { SelectedAssetViewComponent } from './selected-asset-view/selected-asset-view.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [SelectedAssetComponent, SelectedAssetViewComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [SelectedAssetComponent]
})
export class SelectedAssetModule { }
