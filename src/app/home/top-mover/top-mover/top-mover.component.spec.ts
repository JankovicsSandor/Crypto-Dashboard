import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoverComponent } from './top-mover.component';

describe('TopMoverComponent', () => {
  let component: TopMoverComponent;
  let fixture: ComponentFixture<TopMoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
