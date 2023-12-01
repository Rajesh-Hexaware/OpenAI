import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpurchaseComponent } from './importpurchase.component';

describe('ImportpurchaseComponent', () => {
  let component: ImportpurchaseComponent;
  let fixture: ComponentFixture<ImportpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportpurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
