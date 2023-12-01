import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchaseComponent } from './addpurchase.component';

describe('AddpurchaseComponent', () => {
  let component: AddpurchaseComponent;
  let fixture: ComponentFixture<AddpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
