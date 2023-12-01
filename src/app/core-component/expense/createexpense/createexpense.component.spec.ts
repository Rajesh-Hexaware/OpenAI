import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateexpenseComponent } from './createexpense.component';

describe('CreateexpenseComponent', () => {
  let component: CreateexpenseComponent;
  let fixture: ComponentFixture<CreateexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateexpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
