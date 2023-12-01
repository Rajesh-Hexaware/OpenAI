import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasereturnlistComponent } from './purchasereturnlist.component';

describe('PurchasereturnlistComponent', () => {
  let component: PurchasereturnlistComponent;
  let fixture: ComponentFixture<PurchasereturnlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasereturnlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasereturnlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
