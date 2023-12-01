import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpurchaseComponent } from './editpurchase.component';

describe('EditpurchaseComponent', () => {
  let component: EditpurchaseComponent;
  let fixture: ComponentFixture<EditpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
