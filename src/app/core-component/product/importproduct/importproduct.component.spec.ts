import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportproductComponent } from './importproduct.component';

describe('ImportproductComponent', () => {
  let component: ImportproductComponent;
  let fixture: ComponentFixture<ImportproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
