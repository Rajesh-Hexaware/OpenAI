import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpurchasereturnComponent } from './editpurchasereturn.component';

describe('EditpurchasereturnComponent', () => {
  let component: EditpurchasereturnComponent;
  let fixture: ComponentFixture<EditpurchasereturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpurchasereturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpurchasereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
