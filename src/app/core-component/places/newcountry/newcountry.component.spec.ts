import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcountryComponent } from './newcountry.component';

describe('NewcountryComponent', () => {
  let component: NewcountryComponent;
  let fixture: ComponentFixture<NewcountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
