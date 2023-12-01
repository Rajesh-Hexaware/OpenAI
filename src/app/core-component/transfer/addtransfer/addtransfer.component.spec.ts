import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransferComponent } from './addtransfer.component';

describe('AddtransferComponent', () => {
  let component: AddtransferComponent;
  let fixture: ComponentFixture<AddtransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
