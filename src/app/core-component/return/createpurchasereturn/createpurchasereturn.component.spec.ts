import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepurchasereturnComponent } from './createpurchasereturn.component';

describe('CreatepurchasereturnComponent', () => {
  let component: CreatepurchasereturnComponent;
  let fixture: ComponentFixture<CreatepurchasereturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepurchasereturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepurchasereturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
