import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsettingsComponent } from './paymentsettings.component';

describe('PaymentsettingsComponent', () => {
  let component: PaymentsettingsComponent;
  let fixture: ComponentFixture<PaymentsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
