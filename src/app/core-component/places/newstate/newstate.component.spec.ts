import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstateComponent } from './newstate.component';

describe('NewstateComponent', () => {
  let component: NewstateComponent;
  let fixture: ComponentFixture<NewstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewstateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
