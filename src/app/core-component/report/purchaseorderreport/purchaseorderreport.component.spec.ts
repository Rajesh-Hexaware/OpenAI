import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderreportComponent } from './purchaseorderreport.component';

describe('PurchaseorderreportComponent', () => {
  let component: PurchaseorderreportComponent;
  let fixture: ComponentFixture<PurchaseorderreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseorderreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseorderreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
