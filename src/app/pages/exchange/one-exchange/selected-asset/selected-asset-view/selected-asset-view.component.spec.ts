import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAssetViewComponent } from './selected-asset-view.component';

describe('SelectedAssetViewComponent', () => {
  let component: SelectedAssetViewComponent;
  let fixture: ComponentFixture<SelectedAssetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedAssetViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAssetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
