import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreturnlistComponent } from './salesreturnlist.component';

describe('SalesreturnlistComponent', () => {
  let component: SalesreturnlistComponent;
  let fixture: ComponentFixture<SalesreturnlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesreturnlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesreturnlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
