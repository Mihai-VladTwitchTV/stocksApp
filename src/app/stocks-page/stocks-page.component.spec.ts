import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksPageComponent } from './stocks-page.component';

describe('StocksPageComponent', () => {
  let component: StocksPageComponent;
  let fixture: ComponentFixture<StocksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StocksPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StocksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
