import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedAssetComponent } from './selected-asset.component';
import { SelectedAssetViewComponent } from './selected-asset-view/selected-asset-view.component';



@NgModule({
  declarations: [SelectedAssetComponent, SelectedAssetViewComponent],
  imports: [
    CommonModule
  ],
  exports: [SelectedAssetComponent]
})
export class SelectedAssetModule { }
