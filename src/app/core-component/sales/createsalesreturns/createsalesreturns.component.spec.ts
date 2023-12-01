import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesalesreturnsComponent } from './createsalesreturns.component';

describe('CreatesalesreturnsComponent', () => {
  let component: CreatesalesreturnsComponent;
  let fixture: ComponentFixture<CreatesalesreturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesalesreturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatesalesreturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
