import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryreportComponent } from './inventoryreport.component';

describe('InventoryreportComponent', () => {
  let component: InventoryreportComponent;
  let fixture: ComponentFixture<InventoryreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
