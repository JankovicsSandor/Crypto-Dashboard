import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoverViewComponent } from './top-mover-view.component';

describe('TopMoverViewComponent', () => {
  let component: TopMoverViewComponent;
  let fixture: ComponentFixture<TopMoverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMoverViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
