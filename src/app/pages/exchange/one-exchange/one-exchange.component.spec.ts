import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneExchangeComponent } from './one-exchange.component';

describe('OneExchangeComponent', () => {
  let component: OneExchangeComponent;
  let fixture: ComponentFixture<OneExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
