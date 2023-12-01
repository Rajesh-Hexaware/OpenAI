import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubaddcategoryComponent } from './subaddcategory.component';

describe('SubaddcategoryComponent', () => {
  let component: SubaddcategoryComponent;
  let fixture: ComponentFixture<SubaddcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubaddcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubaddcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
