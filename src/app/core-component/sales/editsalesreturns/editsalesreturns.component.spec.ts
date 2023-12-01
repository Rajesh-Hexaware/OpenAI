import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalesreturnsComponent } from './editsalesreturns.component';

describe('EditsalesreturnsComponent', () => {
  let component: EditsalesreturnsComponent;
  let fixture: ComponentFixture<EditsalesreturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalesreturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsalesreturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
