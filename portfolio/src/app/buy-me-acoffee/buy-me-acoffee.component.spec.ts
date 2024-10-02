import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMeACoffeeComponent } from './buy-me-acoffee.component';

describe('BuyMeACoffeeComponent', () => {
  let component: BuyMeACoffeeComponent;
  let fixture: ComponentFixture<BuyMeACoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyMeACoffeeComponent]
    });
    fixture = TestBed.createComponent(BuyMeACoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
