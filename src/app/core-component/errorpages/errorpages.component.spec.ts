import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpagesComponent } from './errorpages.component';

describe('ErrorpagesComponent', () => {
  let component: ErrorpagesComponent;
  let fixture: ComponentFixture<ErrorpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
