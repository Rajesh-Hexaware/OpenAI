import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalesreturnComponent } from './createsalesreturn.component';

describe('CreatesalesreturnComponent', () => {
  let component: CreatesalesreturnComponent;
  let fixture: ComponentFixture<CreatesalesreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesalesreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatesalesreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
