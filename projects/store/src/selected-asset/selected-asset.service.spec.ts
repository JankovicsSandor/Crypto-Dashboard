import { SelectedAssetService } from './selected-asset.service';
import { TestBed } from '@angular/core/testing';



describe('SelectedAssetService', () => {
  let service: SelectedAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
