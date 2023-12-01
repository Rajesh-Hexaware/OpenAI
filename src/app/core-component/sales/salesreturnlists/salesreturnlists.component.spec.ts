import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreturnlistsComponent } from './salesreturnlists.component';

describe('SalesreturnlistsComponent', () => {
  let component: SalesreturnlistsComponent;
  let fixture: ComponentFixture<SalesreturnlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesreturnlistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesreturnlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
