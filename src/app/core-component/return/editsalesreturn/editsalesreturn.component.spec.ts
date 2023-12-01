import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalesreturnComponent } from './editsalesreturn.component';

describe('EditsalesreturnComponent', () => {
  let component: EditsalesreturnComponent;
  let fixture: ComponentFixture<EditsalesreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalesreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsalesreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
