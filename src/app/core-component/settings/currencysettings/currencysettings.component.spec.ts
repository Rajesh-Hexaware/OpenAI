import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencysettingsComponent } from './currencysettings.component';

describe('CurrencysettingsComponent', () => {
  let component: CurrencysettingsComponent;
  let fixture: ComponentFixture<CurrencysettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencysettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencysettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
