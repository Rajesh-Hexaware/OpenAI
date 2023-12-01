import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewusereditComponent } from './newuseredit.component';

describe('NewusereditComponent', () => {
  let component: NewusereditComponent;
  let fixture: ComponentFixture<NewusereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewusereditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewusereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
